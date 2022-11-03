import { useContext } from "react";
import classes from "./WordsList.module.css";
import { WordsContext } from "../store/WordsContext";
import chunk from "../Util/chunk";
import Option from "../Util/Option";

const copyWords = (words: string[]) => {
  new Option(chunk(words, 5))
    .map((lines) => lines.map((line) => line.join(", ")).join("\n"))
    .map((textToCopy) => {
      if (navigator && navigator.clipboard) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => alert("words copied to clipboard"))
          .catch(() => alert("could not copy"));
      } else {
        alert(
          "Sorry copying is not available right now. I'm working on it. :)"
        );
      }
    });
};

const WordsList = () => {
  const { words } = useContext(WordsContext);
  return (
    <section className={classes.words_list}>
      <p>Use the button below to copy your word grid to the clipboard</p>
      <div className={classes.right}>
        <button className={classes.btn} onClick={() => copyWords(words)}>
          Copy
        </button>
      </div>
    </section>
  );
};

export default WordsList;
