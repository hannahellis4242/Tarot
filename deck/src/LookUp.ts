export type Suit = "Wands" | "Cups" | "Swords" | "Pentacles";

export interface LookUpEntry {
  pip: string;
  suit?: Suit;
}

export type LookUp = LookUpEntry[];
