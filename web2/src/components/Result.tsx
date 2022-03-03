import React from "react";
import { useContext } from "react";
import { ResultContext } from "../store/ResultContext";
import Card from "./Card";
const Result: React.FC = () => {
  const context = useContext(ResultContext);
  let body = null;
  if (context.result) {
    body = (
      <ul>
        {context.result.deck.map((card) => {
          return (
            <li key={card.num}>
              <Card num={card.num} reversed={card.reversed} />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <section>
      {body}
      <section>Result : {JSON.stringify(context.result)}</section>
    </section>
  );
};

export default Result;
