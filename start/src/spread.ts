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
  constructor(
    public index: Index,
    public position: Position,
    public shown: boolean
  ) {}
}

class Spread {
  constructor(public cards: Card[]) {}

  successor(): Spread {
    //TODO
    return this;
  }

  predecessor(): Spread {
    //TODO
    return this;
  }
}
