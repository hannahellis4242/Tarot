import axios, { AxiosResponse } from "axios";
import Context from "./Context";
import IState from "./IState";
import StartState from "./StartState";

interface Responce {
  words?: string[];
  err?: string;
}
const buildWordList = (element: HTMLElement) => {
  axios
    .get<void, AxiosResponse<Responce>, Responce>("http://localhost:8000/word")
    .then((value) => {
      if ("err" in value.data) {
        console.log("error :", value.data.err);
      } else if ("words" in value.data) {
        const { words } = value.data as { words: string[] };
        const form = document.createElement("form") as HTMLFormElement;
        words.forEach((word) => {
          {
            const input = document.createElement("input") as HTMLInputElement;
            input.type = "checkbox";
            input.id = word;
            input.value = word;
            form.appendChild(input);
          }
          {
            const label = document.createElement("label") as HTMLLabelElement;
            label.htmlFor = word;
            label.innerHTML = word;
            form.appendChild(label);
          }
        });
        element.appendChild(form);
      } else {
        console.log("Unknown error : ", JSON.stringify(value.data));
      }
    })
    .catch((reason) => {
      console.log("catch : ", reason);
    });
};

export default class NewState implements IState {
  constructor(private context: Context) {}
  setUp(): void {
    const main = document.createElement("main");
    {
      const header = document.createElement("header") as HTMLHeadingElement;
      header.classList.add("page-title");
      header.textContent = "Pick four words";
      main.appendChild(header);
    }
    {
      const section = document.createElement("section");
      buildWordList(section);
    }
    document.body.appendChild(main);
  }

  tearDown() {
    while (document.body.lastChild) {
      document.body.lastChild.remove();
    }
  }
}
