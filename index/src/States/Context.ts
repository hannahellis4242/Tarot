import IState from "./IState";
import NullState from "./NullState";

export default class Context {
  private current: IState;
  constructor() {
    this.current = new NullState();
  }
  changeState(next: IState) {
    this.current.tearDown();
    this.current = next;
    this.current.setUp();
  }
}
