import Context from "./Context";
import IState from "./IState";
import MainState from "./MainState";

export default class StartState implements IState {
  constructor(private context: Context) {}
  setUp(): void {
    const main = document.createElement("main");
    {
      const header = document.createElement("header") as HTMLHeadingElement;
      header.classList.add("page-title");
      header.textContent = "Start";
      main.appendChild(header);
    }
    {
      const start = document.createElement("span") as HTMLSpanElement;
      start.classList.add("button");
      start.classList.add("centre");
      start.textContent = "New";
      start.addEventListener("click", (e) => {
        this.context.changeState(new MainState(this.context));
      });
      main.appendChild(start);
    }
    {
      const start = document.createElement("span") as HTMLSpanElement;
      start.classList.add("button");
      start.classList.add("centre");
      start.textContent = "Use Seed";
      start.addEventListener("click", (e) => {
        this.context.changeState(new MainState(this.context));
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
