import axios, { AxiosResponse } from "axios";
import { values } from "rambda";
import Context from "./Context";
import IState from "./IState";
import StartState from "./StartState";

interface Responce {
  words?: string[];
  err?: string;
}

class FormInputs {
  constructor(
    public wordInputs: HTMLInputElement[],
    public submitButtons: HTMLInputElement[]
  ) {}
}

const gatherInputs = (form: HTMLFormElement): FormInputs => {
  const output = new FormInputs([], []);
  const wordInputs: HTMLInputElement[] = [];
  const submitButton: HTMLInputElement[] = [];
  form.childNodes.forEach((node) => {
    if (node.nodeName === "INPUT") {
      const input = node as HTMLInputElement;
      if (input.type === "checkbox") {
        output.wordInputs.push(input);
      }
      if (input.type === "submit") {
        output.submitButtons.push(input);
      }
    }
  });
  return output;
};

const validate = (form: HTMLFormElement) => {
  const { wordInputs, submitButtons } = gatherInputs(form);
  const count = wordInputs.reduce<number>(
    (acc, x) => (x.checked ? acc + 1 : acc),
    0
  );
  submitButtons.forEach((button) => {
    button.disabled = count !== 4;
  });
};

const getSeed = (form: HTMLFormElement): string => {
  const { wordInputs } = gatherInputs(form);
  return wordInputs
    .filter((value) => value.checked)
    .reduce<string[]>((acc, x) => {
      acc.push(x.value);
      acc.sort();
      return acc;
    }, [])
    .reduce<string>((acc, x) => (acc.length === 0 ? x : acc + "-" + x), "");
};

const navigate = (seed: string) => {
  console.log("navigating to tarot/" + seed);
  location.href = "/tarot/" + seed;
};

const createForm = (words: string[]): HTMLFormElement => {
  const form = document.createElement("form") as HTMLFormElement;
  form.name = "seed";
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    navigate(getSeed(form));
  });
  form.onchange = (ev) => {
    ev.preventDefault();
    validate(form);
  };
  /*form.onsubmit = (ev) => {
    ev.preventDefault;
    navigate(getSeed(form));
  };*/
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
  //submit button
  {
    const input = document.createElement("input") as HTMLInputElement;
    input.type = "submit";
    input.value = "submit";
    input.disabled = true;
    /*input.onsubmit = (ev) => {
      ev.preventDefault();
      navigate(getSeed(form));
    };*/
    form.appendChild(input);
  }
  return form;
};

const buildWordList = (element: HTMLElement) => {
  axios
    .get<void, AxiosResponse<Responce>, Responce>("http://localhost:8000/words")
    .then((value) => {
      if ("err" in value.data) {
        console.log("error :", value.data.err);
      } else if ("words" in value.data) {
        const { words } = value.data as { words: string[] };
        element.appendChild(createForm(words));
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
      main.appendChild(section);
    }
    document.body.appendChild(main);
  }

  tearDown() {
    while (document.body.lastChild) {
      document.body.lastChild.remove();
    }
  }
}
