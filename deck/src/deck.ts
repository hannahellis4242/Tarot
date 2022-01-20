import { Random } from "random";
import { LookUp, Suit } from "./LookUp";

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

type SuitGetterFn = (x: number) => Suit | null;
export const suitGetterFn = (lookup: LookUp): SuitGetterFn => {
  return (x: number) => {
    const entry = lookup.find((_, index) => index === x);
    if (entry) {
      if (entry.suit) {
        return entry.suit;
      }
    }
    return null;
  };
};

type PipGetterFn = (x: number) => string;
export const pipGetterFn = (lookup: LookUp): SuitGetterFn => {
  return (x: number) => {
    const entry = lookup.find((_, index) => index === x);
    if (entry) {
      if (entry.suit) {
        return entry.suit;
      }
    }
    return null;
  };
};
