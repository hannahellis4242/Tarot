import { zip } from "rambda";
import { Card, Position } from "./spread";

export const getCards = () => {
  //for now do a hard coded response
  const response = {
    seed: "Hello",
    time: 1639991419287,
    deck: [
      {
        num: 54,
        reversed: true,
      },
      {
        num: 51,
        reversed: true,
      },
      {
        num: 37,
        reversed: true,
      },
      {
        num: 8,
        reversed: false,
      },
      {
        num: 41,
        reversed: true,
      },
      {
        num: 27,
        reversed: false,
      },
      {
        num: 38,
        reversed: true,
      },
      {
        num: 5,
        reversed: true,
      },
      {
        num: 11,
        reversed: false,
      },
      {
        num: 53,
        reversed: true,
      },
    ],
  };
  //for now do a hard coded spread
  const positions = [
    new Position("core", 1, 0, 0, "North"),
    new Position("blocking", 2, 0, 0, "West"),
  ];
  const cards = zip(response.deck, positions).map((x) => new Card(x[0], x[1]));

  //TODO do this via server request
  return cards;
};
