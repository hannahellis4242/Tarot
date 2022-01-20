import { Random } from "random";

export class index {
  constructor(public num: number, public reversed: boolean) {}
}

export const createDeck = (): index[] =>
  new Array(78).fill(0).map((_, i) => new index(i, false));

export const shuffle = (deck: index[], rng: Random): index[] => {
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

export type Suit = "Wands" | "Cups" | "Swords" | "Pentacles" | null;

export const suit = (x: number): Suit => {
  if (!Number.isInteger(x) || x < 22 || x > 77) {
    return null;
  } else if (x > 21 && x <= 35) {
    return "Wands";
  } else if (x > 35 && x <= 49) {
    return "Cups";
  } else if (x > 49 && x <= 63) {
    return "Swords";
  } else {
    return "Pentacles";
  }
};
