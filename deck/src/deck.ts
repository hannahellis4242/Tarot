import { Random } from "random";
import CardInfo, { Suit } from "./CardInfo";

const info = new CardInfo();

export class index {
  suit?: Suit;
  pip?: string;
  constructor(public num: number, public reversed: boolean) {
    const pipValue = info.pip(num);
    if (pipValue) {
      this.pip = pipValue;
    }
    const suitValue = info.suit(num);
    if (suitValue) {
      this.suit = suitValue;
    }
  }
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
