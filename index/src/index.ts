import Context from "./States/Context";
import MainState from "./States/MainState";

const context = new Context();
context.changeState(new MainState(context));
