import Context from "./Context";
import IState from "./IState";
import { getCards } from "./Tarot/getCards";
import Spread from "./Tarot/spread";
import { State } from "./Tarot/State";

export default class TarotState implements IState {
  constructor(private context: Context) {}
  setUp(): void {
    new State(new Spread(getCards())).refresh();
  }

  tearDown() {
    while (document.body.lastChild) {
      document.body.lastChild.remove();
    }
  }
}
