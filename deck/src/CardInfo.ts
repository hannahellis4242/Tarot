export type Suit = "Wands" | "Cups" | "Swords" | "Pentacles";

interface LookUpEntry {
  pip: string;
  suit?: Suit;
}

type LookUp = LookUpEntry[];

export default class CardInfo {
  lookup: LookUp;
  constructor() {
    this.lookup = [
      { pip: "0 The Fool" },
      { pip: "I The Magician" },
      { pip: "II The High Priestess" },
      { pip: "III The Empress" },
      { pip: "IV The Emperor" },
      { pip: "V The Hierophant" },
      { pip: "VI The Lovers" },
      { pip: "VII The Chariot" },
      { pip: "VIII Strength" },
      { pip: "IX The Hermit" },
      { pip: "X The Wheel of Fortune" },
      { pip: "XI Justice" },
      { pip: "XII The Hanged Man" },
      { pip: "XIII Death" },
      { pip: "XIV Temperance" },
      { pip: "XV The Devil" },
      { pip: "XVI The Tower" },
      { pip: "XVII The Star" },
      { pip: "XVIII The Moon" },
      { pip: "XIX The Sun" },
      { pip: "XX Judgement" },
      { pip: "XXI The World" },
      { pip: "Ace", suit: "Wands" },
      { pip: "Two", suit: "Wands" },
      { pip: "Three", suit: "Wands" },
      { pip: "Four", suit: "Wands" },
      { pip: "Five", suit: "Wands" },
      { pip: "Six", suit: "Wands" },
      { pip: "Seven", suit: "Wands" },
      { pip: "Eight", suit: "Wands" },
      { pip: "Nine", suit: "Wands" },
      { pip: "Ten", suit: "Wands" },
      { pip: "Page", suit: "Wands" },
      { pip: "Knight", suit: "Wands" },
      { pip: "Queen", suit: "Wands" },
      { pip: "King", suit: "Wands" },
      { pip: "Ace", suit: "Cups" },
      { pip: "Two", suit: "Cups" },
      { pip: "Three", suit: "Cups" },
      { pip: "Four", suit: "Cups" },
      { pip: "Five", suit: "Cups" },
      { pip: "Six", suit: "Cups" },
      { pip: "Seven", suit: "Cups" },
      { pip: "Eight", suit: "Cups" },
      { pip: "Nine", suit: "Cups" },
      { pip: "Ten", suit: "Cups" },
      { pip: "Page", suit: "Cups" },
      { pip: "Knight", suit: "Cups" },
      { pip: "Queen", suit: "Cups" },
      { pip: "King", suit: "Cups" },
      { pip: "Ace", suit: "Swords" },
      { pip: "Two", suit: "Swords" },
      { pip: "Three", suit: "Swords" },
      { pip: "Four", suit: "Swords" },
      { pip: "Five", suit: "Swords" },
      { pip: "Six", suit: "Swords" },
      { pip: "Seven", suit: "Swords" },
      { pip: "Eight", suit: "Swords" },
      { pip: "Nine", suit: "Swords" },
      { pip: "Ten", suit: "Swords" },
      { pip: "Page", suit: "Swords" },
      { pip: "Knight", suit: "Swords" },
      { pip: "Queen", suit: "Swords" },
      { pip: "King", suit: "Swords" },
      { pip: "Ace", suit: "Pentacles" },
      { pip: "Two", suit: "Pentacles" },
      { pip: "Three", suit: "Pentacles" },
      { pip: "Four", suit: "Pentacles" },
      { pip: "Five", suit: "Pentacles" },
      { pip: "Six", suit: "Pentacles" },
      { pip: "Seven", suit: "Pentacles" },
      { pip: "Eight", suit: "Pentacles" },
      { pip: "Nine", suit: "Pentacles" },
      { pip: "Ten", suit: "Pentacles" },
      { pip: "Page", suit: "Pentacles" },
      { pip: "Knight", suit: "Pentacles" },
      { pip: "Queen", suit: "Pentacles" },
      { pip: "King", suit: "Pentacles" },
    ];
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
