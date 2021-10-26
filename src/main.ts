import deck_data, { index } from "./data";
import { toCard } from "./utils";

const deck = new deck_data();
console.log(deck.deck.map((value: index, _) => toCard(value.num)));
