import { createDeck, shuffle } from "./data";
import { toCard } from "./utils";
import random from "random";
import seedrandom from "seedrandom";
import { populate } from "./Layout";

const seed = "42";
const rng = random.clone(seedrandom(seed));

const deck = shuffle(createDeck(), rng).map((i, _) => {
  return {
    card: toCard(i.num)!,
    reversed: i.reversed,
    filename: "cards/" + i.num.toString() + ".jpg",
  };
});

const result = populate(
  [
    { num: 1, name: "", orient: 0, x: 50, y: 100 },
    { num: 2, name: "", orient: 0, x: 20, y: 150 },
  ],
  deck
);
console.log(JSON.stringify(result, undefined, 4));
