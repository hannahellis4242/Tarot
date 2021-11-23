class Index {
  constructor(public num: number, public reversed: boolean) {}
}

type Orientation = "North" | "West" | "South" | "East";

class Position {
  constructor(
    public title: string,
    public order: number,
    public x: number,
    public y: number,
    public orient: Orientation
  ) {}
}

class Card {
  constructor(public index: Index, public position: Position) {}
  build() {
    //TODO this method will return an svg tree
  }
}

class Spread {
  constructor(public cards: Card[], public numberToShow: number) {}

  successor(): Spread {
    const newNumber = this.numberToShow + 1;
    return new Spread(
      this.cards,
      newNumber > this.cards.length ? this.cards.length : newNumber
    );
  }

  predecessor(): Spread {
    const newNumber = this.numberToShow - 1;
    return new Spread(this.cards, newNumber < 0 ? 0 : newNumber);
  }

  build() {
    //TODO this method will return an svg tree
  }
}
