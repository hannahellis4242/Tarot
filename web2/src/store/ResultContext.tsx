import axios from "axios";
import { createContext, useState } from "react";
import ResultModel from "../models/ResultModel";

interface ResultModelContext {
  result: ResultModel | null;
  getResult: (seed: string, num?: number) => void;
}

export const ResultContext = createContext<ResultModelContext>({
  result: null,
  getResult: (seed: string, num?: number) => {},
});

const ResultContextProvider: React.FC = (props) => {
  const [result, setResult] = useState<ResultModel | null>(null);

  const getResultHandler = (seed: string, num?: number) => {
    axios
      .get("http://localhost:5000/deck", { params: { seed, draw: num } })
      .then((res) => {
        setResult((prev) => res.data);
      });
  };

  const context = {
    result: result,
    getResult: getResultHandler,
  };
  return (
    <ResultContext.Provider value={context}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;