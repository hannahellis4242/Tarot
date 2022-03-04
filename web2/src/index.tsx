import ReactDOM from "react-dom";
import App from "./App";
import ResultContextProvider from "./store/ResultContext";
import SelectedWordsContextProvider from "./store/SelectedWordsContext";
import WordsContextProvider from "./store/WordsContext";

console.log(JSON.stringify(process.env));

ReactDOM.render(
  <SelectedWordsContextProvider>
    <WordsContextProvider>
      <ResultContextProvider>
        <App />
      </ResultContextProvider>
    </WordsContextProvider>
  </SelectedWordsContextProvider>,
  document.getElementById("root")
);
