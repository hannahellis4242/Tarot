import React from "react";
import { useContext } from "react";
import { ResultContext } from "../store/ResultContext";
import Card from "./Card";
import { CardModel } from "../models/ResultModel";
import classes from "./GeneratorResult.module.css";
import chunk from "../Util/chunk";

const cardName = (card: CardModel) => {
  const name = card.suit ? `${card.pip} of ${card.suit}` : card.pip;
  return card.reversed ? `${name} (rev)` : name;
};

const GeneratorResult: React.FC = () => {
  const context = useContext(ResultContext);
  let body = null;
  if (context.result) {
    const columns = 5;
    const rows = chunk(context.result.deck, columns);
    if (rows) {
      body = (
        <table>
          <tbody>
            {rows.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((card, colIndex) => {
                    const name = cardName(card);
                    const index = rowIndex * columns + colIndex + 1;
                    return (
                      <td key={index}>
                        <p className={classes.index_label}>{index}</p>
                        <Card
                          num={card.num}
                          reversed={card.reversed}
                          name={name}
                        />
                        <p className={classes.name_label}>{name}</p>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }
  return <section className={classes.results}>{body}</section>;
};

export default GeneratorResult;
