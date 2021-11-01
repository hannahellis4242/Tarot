import { Card, MajorArchana, MinorArchana } from "./Card";

export let toCard = (i: number): Card | null => {
  switch (i) {
    case 0:
      return new MajorArchana("The Fool");
    case 1:
      return new MajorArchana("The Magician");
    case 2:
      return new MajorArchana("The High Priestess");
    case 3:
      return new MajorArchana("The Empress");
    case 4:
      return new MajorArchana("The Emperor");
    case 5:
      return new MajorArchana("The Hierophant");
    case 6:
      return new MajorArchana("The Lovers");
    case 7:
      return new MajorArchana("The Chariot");
    case 8:
      return new MajorArchana("Strength");
    case 9:
      return new MajorArchana("The Hermit");
    case 10:
      return new MajorArchana("The Wheel Of Fortune");
    case 11:
      return new MajorArchana("Justice");
    case 12:
      return new MajorArchana("The Hanged Man");
    case 13:
      return new MajorArchana("Death");
    case 14:
      return new MajorArchana("Temperance");
    case 15:
      return new MajorArchana("The Devil");
    case 16:
      return new MajorArchana("The Tower");
    case 17:
      return new MajorArchana("The Star");
    case 18:
      return new MajorArchana("The Moon");
    case 19:
      return new MajorArchana("The Sun");
    case 20:
      return new MajorArchana("Judgement");
    case 21:
      return new MajorArchana("The World");
    case 22:
      return new MinorArchana("Wands", "Ace");
    case 23:
      return new MinorArchana("Wands", "Two");
    case 24:
      return new MinorArchana("Wands", "Three");
    case 25:
      return new MinorArchana("Wands", "Four");
    case 26:
      return new MinorArchana("Wands", "Five");
    case 27:
      return new MinorArchana("Wands", "Six");
    case 28:
      return new MinorArchana("Wands", "Seven");
    case 29:
      return new MinorArchana("Wands", "Eight");
    case 30:
      return new MinorArchana("Wands", "Nine");
    case 31:
      return new MinorArchana("Wands", "Ten");
    case 32:
      return new MinorArchana("Wands", "Page");
    case 33:
      return new MinorArchana("Wands", "Knight");
    case 34:
      return new MinorArchana("Wands", "Queen");
    case 35:
      return new MinorArchana("Wands", "King");
    case 36:
      return new MinorArchana("Cups", "Ace");
    case 37:
      return new MinorArchana("Cups", "Two");
    case 38:
      return new MinorArchana("Cups", "Three");
    case 39:
      return new MinorArchana("Cups", "Four");
    case 40:
      return new MinorArchana("Cups", "Five");
    case 41:
      return new MinorArchana("Cups", "Six");
    case 42:
      return new MinorArchana("Cups", "Seven");
    case 43:
      return new MinorArchana("Cups", "Eight");
    case 44:
      return new MinorArchana("Cups", "Nine");
    case 45:
      return new MinorArchana("Cups", "Ten");
    case 46:
      return new MinorArchana("Cups", "Page");
    case 47:
      return new MinorArchana("Cups", "Knight");
    case 48:
      return new MinorArchana("Cups", "Queen");
    case 49:
      return new MinorArchana("Cups", "King");
    case 50:
      return new MinorArchana("Swords", "Ace");
    case 51:
      return new MinorArchana("Swords", "Two");
    case 52:
      return new MinorArchana("Swords", "Three");
    case 53:
      return new MinorArchana("Swords", "Four");
    case 54:
      return new MinorArchana("Swords", "Five");
    case 55:
      return new MinorArchana("Swords", "Six");
    case 56:
      return new MinorArchana("Swords", "Seven");
    case 57:
      return new MinorArchana("Swords", "Eight");
    case 58:
      return new MinorArchana("Swords", "Nine");
    case 59:
      return new MinorArchana("Swords", "Ten");
    case 60:
      return new MinorArchana("Swords", "Page");
    case 61:
      return new MinorArchana("Swords", "Knight");
    case 62:
      return new MinorArchana("Swords", "Queen");
    case 63:
      return new MinorArchana("Swords", "King");
    case 64:
      return new MinorArchana("Penticles", "Ace");
    case 65:
      return new MinorArchana("Penticles", "Two");
    case 66:
      return new MinorArchana("Penticles", "Three");
    case 67:
      return new MinorArchana("Penticles", "Four");
    case 68:
      return new MinorArchana("Penticles", "Five");
    case 69:
      return new MinorArchana("Penticles", "Six");
    case 70:
      return new MinorArchana("Penticles", "Seven");
    case 71:
      return new MinorArchana("Penticles", "Eight");
    case 72:
      return new MinorArchana("Penticles", "Nine");
    case 73:
      return new MinorArchana("Penticles", "Ten");
    case 74:
      return new MinorArchana("Penticles", "Page");
    case 75:
      return new MinorArchana("Penticles", "Knight");
    case 76:
      return new MinorArchana("Penticles", "Queen");
    case 77:
      return new MinorArchana("Penticles", "King");
    default:
      return null;
  }
};
