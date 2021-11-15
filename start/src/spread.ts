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
    public orient: Orientation,
    public card?: Index
  ) {}
}

class Spread {
  constructor(public deck: Index[], public positions: Position[]) {}

  /*successor(): Spread {
    const newDeck = this.deck;
    const card = newDeck.pop();
    if (card) {
      const newPositions = this.positions.reduce((acc, x) => {
        acc.peak;
      }, []);
    }
    return this;
  }*/
}
