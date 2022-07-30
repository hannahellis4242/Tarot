import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import ServerInformation from "../Util/ServerInformation";

interface WordModelContext {
  words: string[];
  refresh: () => void;
}

export const WordsContext = createContext<WordModelContext>({
  words: [],
  refresh: () => {},
});

const serverInfo = new ServerInformation();
const getURL = () => {
  return serverInfo
    .get("word")
    .map(({ host, port }) => {
      return `http://${host}:${port}/random`;
    })
    .unwrap_or("http://localhost:5001/random");
};
const url = getURL();
const WordsContextProvider: React.FC<{children:React.ReactNode}> = (props) => {
  const [words, setWords] = useState<string[]>([]);

  const getWordsHandler = () => {
    console.log(url);
    axios
      .get(url, { params: { num: 100 } })
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
