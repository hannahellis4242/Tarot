import React, { useContext } from "react";
import classes from "./WordsList.module.css";
import { WordsContext } from "../store/WordsContext";
import chunk from "../Util/chunk";
import Option from "../Util/Option";

const copyWords = (words: string[]) => {
  new Option(chunk(words, 5))
    .map((lines) => lines.map((line) => line.join(", ")).join("\n"))
    .map((textToCopy) =>
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => alert("words copied to clipboard"))
        .catch(() => alert("could not copy"))
    );
};

const WordsList: React.FC = () => {
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
