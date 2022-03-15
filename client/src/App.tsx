import React from "react";
import Generator from "./components/Generator";
import WordsList from "./components/WordsList";

const App: React.FC = () => {
  return (
    <section>
      <Generator />
      <WordsList />
    </section>
  );
};

export default App;
