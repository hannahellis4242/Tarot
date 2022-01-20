export type Suit = "Wands" | "Cups" | "Swords" | "Pentacles";

interface LookUpEntry {
  pip: string;
  suit?: Suit;
}

type LookUp = LookUpEntry[];

export default class CardInfo {
  lookup: LookUp;
  constructor() {
    this.lookup = require("./lookup.json");
  }
  suit(x: number): Suit | null {
    const entry = this.lookup.find((_, index) => index === x);
    if (entry) {
      if (entry.suit) {
        return entry.suit;
      }
    }
    return null;
  }
  pip(x: number): string | null {
    const entry = this.lookup.find((_, index) => index === x);
    if (entry) {
      return entry.pip;
    }
    return null;
  }
}
