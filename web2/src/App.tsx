import React from "react";
import Input from "./components/Input";
import Result from "./components/Result";
const App: React.FC = () => {
  return (
    <section>
      <header>Deck Generator</header>
      <Input />
      <Result />
    </section>
  );
};

export default App;
