import React from "react";
import { useContext } from "react";
import { ResultContext } from "../store/ResultContext";
import Card from "./Card";
import { CardModel } from "../models/ResultModel";
import classes from "./Result.module.css";
import chunk from "../Util/chunk";

const cardName = (card: CardModel) => {
  const name = card.suit ? `${card.pip} of ${card.suit}` : card.pip;
  return card.reversed ? `${name} (rev)` : name;
};

const Result: React.FC = () => {
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
                <tr>
                  {row.map((card, colIndex) => {
                    const name = cardName(card);
                    return (
                      <td key={card.num}>
                        <p className={classes.index_label}>
                          {rowIndex * columns + colIndex + 1}
                        </p>
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

export default Result;
