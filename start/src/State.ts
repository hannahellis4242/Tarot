import Spread from "./spread";
import { clearElement } from "./util";

interface FormElements {
  form: HTMLFormElement;
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
}

export class State {
  private prev: Spread | null;
  private next: Spread | null;
  constructor(private curent: Spread) {
    this.prev = curent.predecessor();
    this.next = curent.successor();
  }

  private buildImg(): Element {
    const img = document.createElement("section");
    img.appendChild(this.curent.build());
    return img;
  }

  private buildForm(): FormElements {
    const form = document.createElement("form") as HTMLFormElement;
    const prevButton = document.createElement("button") as HTMLButtonElement;
    const nextButton = document.createElement("button") as HTMLButtonElement;
    prevButton.innerText = "<- back";
    nextButton.innerText = "forward ->";
    form.appendChild(prevButton);
    form.appendChild(nextButton);
    return { form, prevButton, nextButton };
  }

  private moveToPrev() {
    if (this.prev) {
      this.next = this.curent;
      this.curent = this.prev;
      this.prev = this.curent.predecessor();
    }
  }

  private moveToNext() {
    if (this.next) {
      this.prev = this.curent;
      this.curent = this.next;
      this.next = this.curent.successor();
    }
  }

  refresh() {
    clearElement(document.body);
    document.body.appendChild(this.build());
  }

  private build(): Element {
    const main = document.createElement("main");
    const img = this.buildImg();
    const { form, prevButton, nextButton } = this.buildForm();
    main.appendChild(img);
    if (this.prev) {
      prevButton.classList.add("enabled");
      prevButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.moveToPrev();
        this.refresh();
      });
    } else {
      prevButton.classList.add("disabled");
      prevButton.disabled = true;
    }
    if (this.next) {
      nextButton.classList.add("enabled");
      nextButton.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.moveToNext();
        this.refresh();
      });
    } else {
      nextButton.classList.add("disabled");
      nextButton.disabled = true;
    }
    main.appendChild(form);
    return main;
  }
}
