import Context from "./Context";
import IState from "./IState";
import StartState from "./StartState";

export default class MainState implements IState {
  constructor(private context: Context) {}
  setUp(): void {
    const main = document.createElement("main");
    {
      const header = document.createElement("header") as HTMLHeadingElement;
      header.classList.add("page-title");
      header.textContent = "Tarot Practice";
      main.appendChild(header);
    }
    {
      const start = document.createElement("span") as HTMLSpanElement;
      start.classList.add("button");
      start.classList.add("centre");
      start.textContent = "Start";
      start.addEventListener("click", (e) => {
        this.context.changeState(new StartState(this.context));
      });
      main.appendChild(start);
    }
    document.body.appendChild(main);
  }

  tearDown() {
    while (document.body.lastChild) {
      document.body.lastChild.remove();
    }
  }
}
