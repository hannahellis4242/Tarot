import { randomBytes } from "crypto";
import { Random } from "random";

export class index {
  constructor(public num: number, public reversed: boolean) {}
}

export let createDeck = (): index[] =>
  new Array(78).fill(0).map((_, i) => new index(i, false));

export let shuffle = (deck: index[], rng: Random): index[] => {
  const max = deck.length - 1;
  for (var i = 0; i < max; ++i) {
    const x = rng.int(i, max);
    const temp = deck[i];
    deck[i] = deck[x];
    deck[x] = temp;
    deck[i].reversed = deck[i].reversed != rng.boolean();
  }
  return deck;
};
