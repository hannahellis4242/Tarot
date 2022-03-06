import React, { useContext, useRef } from "react";
import { SelectedWordsContext } from "../store/SelectedWordsContext";
import { WordsContext } from "../store/WordsContext";
import chunk from "../Util/chunk";

const countSelected = (elements: HTMLCollection): number => {
  let count = 0;
  for (let i = 0; i < elements.length; ++i) {
    const child = elements[i];
    if (child.tagName === "INPUT") {
      const input = child as HTMLInputElement;
      count += input.checked ? 1 : 0;
    } else {
      count += countSelected(child.children);
    }
  }
  return count;
};

const getSelected = (elements: HTMLCollection): string[] => {
  let out: string[] = [];
  for (let i = 0; i < elements.length; ++i) {
    const child = elements[i];
    if (child.tagName === "INPUT") {
      const input = child as HTMLInputElement;
      if (input.checked) {
        out.push(input.id);
      }
    } else {
      out = out.concat(getSelected(child.children));
    }
  }
  return out;
};

const clearSelected = (elements: HTMLCollection) => {
  for (let i = 0; i < elements.length; ++i) {
    const child = elements[i];
    if (child.tagName === "INPUT") {
      const input = child as HTMLInputElement;
      input.checked = false;
    } else {
      clearSelected(child.children);
    }
  }
};

const WordInput: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const context = useContext(WordsContext);
  const selectedContext = useContext(SelectedWordsContext);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const table = tableRef.current;
    if (table) {
      const selected = getSelected(table.children);
      selectedContext.setSelected(selected);
      clearSelected(table.children);
      context.refresh();
      handleInputChanged();
    }
  };
  const handleInputChanged = () => {
    const table = tableRef.current;
    if (table) {
      const button = submitRef.current;
      if (button) {
        const selected = countSelected(table.children);
        if (selected >= 4) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      }
    }
  };
  const numberOfColumns = 5;
  const rows = chunk(context.words, numberOfColumns);
  let body = null;
  if (rows) {
    body = (
      <table ref={tableRef}>
        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {row.map((word, colIndex) => {
                  return (
                    <td key={rowIndex * numberOfColumns + colIndex}>
                      <div>
                        <input
                          type="checkbox"
                          id={word}
                          name={word}
                          onChange={handleInputChanged}
                        />
                        <label htmlFor={word}>{word}</label>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={numberOfColumns}>
              <button disabled ref={submitRef}>
                create seed
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
  return <form onSubmit={onSubmitHandler}>{body}</form>;
};

export default WordInput;
