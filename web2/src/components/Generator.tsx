import React from "react";
import GeneratorInput from "./GeneratorInput";
import GeneratorResult from "./GeneratorResult";
import Word from "./Word";
const Generator: React.FC = () => {
  return (
    <section>
      <header>Deck Generator</header>
      <section>
        <p>To "shuffle and cut" the cards you may etiher</p>
        <ul>
          <li>select at least 4 meaningful words from the options below</li>
          <li>or you may type your own seed in to the seed input box</li>
        </ul>
        <p>
          Then select the number of cards to draw from the deck, or if left
          blank will generate the full deck.
        </p>
        <p>Once you are ready hit the submit button</p>
      </section>
      <Word />
      <GeneratorInput />
      <GeneratorResult />
    </section>
  );
};

export default Generator;
