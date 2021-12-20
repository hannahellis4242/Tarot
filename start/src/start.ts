import { zip } from "rambda";
import Spread, { Position, Card } from "./spread";

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
console.log(cards);
const spread = new Spread(cards);

const main = document.createElement("main");
{
  const form = document.createElement("form") as HTMLFormElement;
  {
  }
  const img = document.createElement("section");
  {
    const svg = spread.build();
    img.appendChild(svg);
  }
  main.appendChild(form);
  main.appendChild(img);
}
document.body.appendChild(main);
