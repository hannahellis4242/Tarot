import { getCards } from "./getCards";
import Spread from "./spread";
import { State } from "./State";

new State(new Spread(getCards())).refresh();
