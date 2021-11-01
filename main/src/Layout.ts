import { CardInfo } from "./CardInfo";

type Orient = 0 | 45 | 90;

interface position {
  num: number;
  name: string;
  orient: Orient;
  x: number;
  y: number;
}

type populatedPosition = {
  card: CardInfo;
  position: position;
};

type Layout = position[];

export let populate = (
  layout: Layout,
  deck: CardInfo[]
): populatedPosition[] => {
  return layout.map((position, _) => {
    const card = deck.pop()!;
    return { card, position };
  });
  /*let section = document.createElement("section");
  {
    layout.forEach((pos, _) => {
      const card = deck.pop();
      if (card) {
        let subSection = document.createElement("section");
        {
          let image = document.createElement("img") as HTMLImageElement;
          image.src = card.filename;
          image.alt = show(card.card);
          if (card.reversed) {
            image.style.transform = "rotate(180)";
          }
          subSection.append(image);
        }
        {
          let text = document.createElement("p") as HTMLParagraphElement;
          text.innerText = show(card.card);
          subSection.append(text);
        }
        subSection.style.position = "absolute";
        subSection.style.top = pos.y.toString();
        subSection.style.left = pos.x.toString();
        section.append(subSection);
      }
    });
  }
  return section;*/
};
