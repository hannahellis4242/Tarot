import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

interface WordModelContext {
  words: string[];
  refresh: () => void;
}

export const WordsContext = createContext<WordModelContext>({
  words: [],
  refresh: () => {},
});

const WordsContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [words, setWords] = useState<string[]>([]);

  const getWordsHandler = () => {
    axios
      .get("/words/random", { params: { num: 100 } })
      .then((res) => {
        setWords((prev) => res.data.words);
      })
      .catch((reason) => {
        console.error(reason);
      });
  };

  useEffect(() => {
    getWordsHandler();
  }, []);

  const context = {
    words,
    refresh: getWordsHandler,
  };
  return (
    <WordsContext.Provider value={context}>
      {props.children}
    </WordsContext.Provider>
  );
};

export default WordsContextProvider;
