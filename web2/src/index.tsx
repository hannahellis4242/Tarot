import ReactDOM from "react-dom";
import App from "./App";
import ResultContextProvider from "./store/ResultContext";

ReactDOM.render(
  <ResultContextProvider>
    <App />
  </ResultContextProvider>,
  document.getElementById("root")
);
