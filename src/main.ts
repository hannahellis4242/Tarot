import { createDeck, shuffle } from "./data";
import { toCard } from "./utils";
import random from "random";
import seedrandom from "seedrandom";

const seed = "Hello World";
const rng = random.clone(seedrandom(seed));

let deck = createDeck();

const times = rng.int(20, 50);
for (let i = 0; i < times; i++) {
  deck = shuffle(deck, rng);
}
console.log(
  deck.map((i, _) => {
    return { card: toCard(i.num), reversed: i.reversed };
  })
);
