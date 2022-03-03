import React, { useContext, useRef } from "react";
import { ResultContext } from "../store/ResultContext";
const Input: React.FC = () => {
  const seedRef = useRef<HTMLInputElement>(null);
  const numRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const context = useContext(ResultContext);

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
      seed.value = "";
      handleInputChanged();
    }
  };
  const handleInputChanged = () => {
    const button = buttonRef.current;
    if (button) {
      const input = seedRef.current;
      if (input) {
        button.disabled = input.value === "";
      }
    }
  };

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
            <td colSpan={2}>
              {" "}
              <button ref={buttonRef} disabled={true}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Input;
