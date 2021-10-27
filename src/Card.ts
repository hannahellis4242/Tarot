type Suit = "Wands" | "Cups" | "Swords" | "Penticles";
type PipValue =
  | "Ace"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine"
  | "Ten"
  | "Page"
  | "Knight"
  | "Queen"
  | "King";

export class MinorArchana {
  constructor(public suit: Suit, public value: PipValue) {}
}

type Title =
  | "The Fool"
  | "The Magician"
  | "The High Priestess"
  | "The Empress"
  | "The Emperor"
  | "The Hierophant"
  | "The Lovers"
  | "The Chariot"
  | "Strength"
  | "The Hermit"
  | "The Wheel Of Fortune"
  | "Justice"
  | "The Hanged Man"
  | "Death"
  | "Temperance"
  | "The Devil"
  | "The Tower"
  | "The Star"
  | "The Moon"
  | "The Sun"
  | "Judgement"
  | "The World";

export class MajorArchana {
  constructor(public title: Title) {}
}

export type Card = MajorArchana | MinorArchana;

export let show = (c: Card): string => {
  if (c instanceof MajorArchana) {
    return c.title;
  }
  if (c instanceof MinorArchana) {
    return c.value.toString() + " of " + c.suit.toString();
  }
  return "";
};
