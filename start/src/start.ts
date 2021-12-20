import { zip } from "rambda";
import Spread, { Position, Card } from "./spread";
import { clearElement } from "./util";

//for now do a hard coded response
const response = {
  seed: "Hello",
  time: 1639991419287,
  deck: [
    {
      num: 54,
      reversed: true,
    },
    {
      num: 51,
      reversed: true,
    },
    {
      num: 37,
      reversed: true,
    },
    {
      num: 8,
      reversed: false,
    },
    {
      num: 41,
      reversed: true,
    },
    {
      num: 27,
      reversed: false,
    },
    {
      num: 38,
      reversed: true,
    },
    {
      num: 5,
      reversed: true,
    },
    {
      num: 11,
      reversed: false,
    },
    {
      num: 53,
      reversed: true,
    },
  ],
};

//for now do a hard coded spread
const positions = [
  new Position("core", 1, 0, 0, "North"),
  new Position("blocking", 2, 0, 0, "West"),
];

const cards = zip(response.deck, positions).map((x) => new Card(x[0], x[1]));

let spread = new Spread(cards);
let prev = spread.predecessor();
let next = spread.successor();

const main = document.createElement("main");
{
  const img = document.createElement("section");
  {
    const svg = spread.build();
    img.appendChild(svg);
  }
  const form = document.createElement("form") as HTMLFormElement;
  {
    {
      const button = document.createElement("button");
      button.innerText = "<- previous";
      if (prev) {
        button.classList.add("enabled");
        button.addEventListener("click", (ev) => {
          ev.preventDefault();
          clearElement(img);
          next = spread;
          spread = prev as Spread;
          prev = spread.predecessor();
          const svg = spread.build();
          img.appendChild(svg);
        });
      } else {
        button.classList.add("disabled");
      }
      form.appendChild(button);
    }
    {
      {
        const button = document.createElement("button");
        button.innerText = "next ->";
        if (next) {
          button.classList.add("enabled");
          button.addEventListener("click", (ev) => {
            ev.preventDefault();
            clearElement(img);
            prev = spread;
            spread = next as Spread;
            next = spread.successor();
            const svg = spread.build();
            img.appendChild(svg);
          });
        } else {
          button.classList.add("disabled");
        }
        form.appendChild(button);
      }
    }
  }
  main.appendChild(img);
  main.appendChild(form);
}
document.body.appendChild(main);
