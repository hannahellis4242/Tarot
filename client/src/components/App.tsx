import ResultContextProvider from "../store/ResultContext";
import SelectedWordsContextProvider from "../store/SelectedWordsContext";
import WordsContextProvider from "../store/WordsContext";
import GeneratorInput from "./GeneratorInput";
import GeneratorResult from "./GeneratorResult";
import Instructions from "./Instructions";
import WordInput from "./WordInput";
import WordsList from "./WordsList";

const App = () => (
  <section>
    <header>Deck Generator</header>
    <Instructions />
    <SelectedWordsContextProvider>
      <WordsContextProvider>
        <WordInput />
        <WordsList />
        <ResultContextProvider>
          <GeneratorInput />
          <GeneratorResult />
        </ResultContextProvider>
      </WordsContextProvider>
    </SelectedWordsContextProvider>
  </section>
);
export default App;
