export class index {
  constructor(public num: number, public reversed: boolean) {}
}

export default class deck_data {
  public deck: index[];
  constructor() {
    this.deck = new Array(78).fill(0).map((_, i) => new index(i, false));
  }
}

export let shuffle = (deck: deck_data, i: number): deck_data => {
  if (i < 0 || i > 77) {
    return deck;
  }
  //TODO
  return deck;
};
