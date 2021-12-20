class Index {
  constructor(public num: number, public reversed: boolean) {}
}

type Compass = "North" | "West" | "South" | "East";
type Orientation = number | Compass;

export class Position {
  constructor(
    public title: string,
    public order: number,
    public x: number,
    public y: number,
    public orient: Orientation
  ) {}
}

interface Instructions {
  width: number;
  show: boolean;
  height?: number;
}

export class Card {
  constructor(public index: Index, public position: Position) {}
  build(i: Instructions): SVGElement {
    const ns = "http://www.w3.org/2000/svg";
    const img = document.createElementNS(ns, "image");
    if (i.show) {
      img.setAttributeNS(
        null,
        "href",
        "cards/" + this.index.num.toString() + ".svg"
      );
    } else {
      img.setAttributeNS(null, "href", "cards/blank.svg");
    }
    img.setAttributeNS(null, "width", i.width.toString());
    //ORENT todo
    img.setAttributeNS(null, "transform", "translate(100,5) rotate(450)");
    return img;
  }
}

export default class Spread {
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

  build(): SVGElement {
    const ns = "http://www.w3.org/2000/svg";
    let svg = this.shown.reduce<SVGElement>((acc, card) => {
      acc.appendChild(card.build({ width: 50, show: true }));
      return acc;
    }, document.createElementNS(ns, "svg"));
    svg = this.shown.reduce<SVGElement>((acc, card) => {
      acc.appendChild(card.build({ width: 50, show: false }));
      return acc;
    }, svg);
    //svg.setAttributeNS(null, "width", "100%");
    //svg.setAttributeNS(null, "height", "100%");
    return svg;
  }
}
