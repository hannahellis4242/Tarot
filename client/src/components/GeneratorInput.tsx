import { useContext, useRef, useEffect } from "react";
import { ResultContext } from "../store/ResultContext";
import { SelectedWordsContext } from "../store/SelectedWordsContext";
import { WordsContext } from "../store/WordsContext";
import Option from "../Util/Option";
const GeneratorInput = () => {
  const seedRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const context = useContext(ResultContext);
  const selectedContext = useContext(SelectedWordsContext);
  const wordsContext = useContext(WordsContext);

  const copySeed = () => {
    new Option(seedRef.current).map((seed) => {
      if (navigator && navigator.clipboard) {
        navigator.clipboard
          .writeText(seed.value)
          .then(() => alert("seed copied to clipboard"))
          .catch(() => alert("could not copy"));
      } else {
        alert(
          "Sorry copying is not available right now. I'm working on it. :)"
        );
      }
    });
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const seed = seedRef.current;
    if (seed && seed.value !== "") {
      const num = numRef.current;
      if (num) {
        context.getResult(seed.value, Number(num.value));
      } else {
        context.getResult(seed.value);
      }
      selectedContext.setSelected([]);
      wordsContext.refresh();
      handleInputChanged();
    }
  };
  const canSubmit = (): boolean => {
    const input = seedRef.current;
    return input ? input.value.trim() !== "" : false;
  };
  const handleInputChanged = () => {
    const submitButton = submitButtonRef.current;
    if (submitButton) {
      submitButton.disabled = !canSubmit();
    }
    const copyButton = copyButtonRef.current;
    if (copyButton) {
      copyButton.disabled = !canSubmit();
    }
  };
  useEffect(() => {
    const input = seedRef.current;
    if (input) {
      input.value = selectedContext.selected.join("-");
      handleInputChanged();
    }
  });

  return (
    <form onSubmit={onSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="seed">Seed </label>
            </td>
            <td>
              <input
                type="text"
                id="seed"
                ref={seedRef}
                onChange={handleInputChanged}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="num">Number Of Cards To Draw </label>
            </td>
            <td>
              <input
                type="number"
                max="78"
                min="1"
                defaultValue={1}
                id="num"
                ref={numRef}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button
                type="button"
                ref={copyButtonRef}
                disabled={!canSubmit()}
                onClick={copySeed}
              >
                Copy Seed
              </button>
            </td>
            <td>
              <button
                type="submit"
                ref={submitButtonRef}
                disabled={!canSubmit()}
              >
                Generate Cards
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default GeneratorInput;
