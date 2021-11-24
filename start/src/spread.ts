class Index {
  constructor(public num: number, public reversed: boolean) {}
}

type Compass = "North" | "West" | "South" | "East";
type Orientation = number | Compass;

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
  build(
    width: number,
    height: number | null = null,
    show: boolean = true
  ): SVGElement {
    const ns = "http://www.w3.org/2000/svg";
    const img = document.createElementNS(ns, "image");
    if (show) {
      img.setAttributeNS(
        null,
        "href",
        "cards/" + this.index.num.toString() + ".svg"
      );
    } else {
      img.setAttributeNS(null, "href", "cards/blank.svg");
    }
    img.setAttributeNS(null, "width", width.toString());
    //ORENT todo
    img.setAttributeNS(null, "transform", "translate(100,5) rotate(450)");
    return img;
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

  build(): SVGElement {
    const ns = "http://www.w3.org/2000/svg";
    const svg = this.cards.reduce<SVGElement>((acc, card) => {
      acc.appendChild(card.build(50));
      return acc;
    }, document.createElementNS(ns, "svg"));
    //svg.setAttributeNS(null, "width", "100%");
    //svg.setAttributeNS(null, "height", "100%");
    return svg;
  }
}
