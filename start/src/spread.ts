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
}

class Spread {
  constructor(public hiden: Card[], public shown: Card[] = []) {}
  successor(): Spread | null {
    const [head, ...tail] = this.hiden;
    if (head) {
      return new Spread(tail, [...this.shown, head]);
    }
    return null;
  }

  predecessor(): Spread | null {
    const [end, ...init] = [...this.shown].reverse();
    if (end) {
      return new Spread([end, ...this.hiden], init.reverse());
    }
    return null;
  }
}
