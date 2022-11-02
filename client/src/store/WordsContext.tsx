import axios from "axios";
import { createContext, useState, useEffect } from "react";

interface WordModelContext {
  words: string[];
  refresh: () => void;
}

export const WordsContext = createContext<WordModelContext>({
  words: [],
  refresh: () => {},
});

const WordsContextProvider = (props: { children: React.ReactNode }) => {
  const [words, setWords] = useState<string[]>([]);
  const getWordsHandler = () => {
    axios
      .get("/word/random", { params: { num: 100 } })
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
