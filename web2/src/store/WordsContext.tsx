import axios from "axios";
import { createContext, useState, useEffect } from "react";
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

const WordsContextProvider: React.FC = (props) => {
  const [words, setWords] = useState<string[]>([]);

  const getWordsHandler = () => {
    axios
      .get(getURL(), { params: { num: 100 } })
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
