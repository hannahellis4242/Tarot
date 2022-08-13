import React from "react";
import ReactDOM from "react-dom";
import classes from "./react.module.css";

const Index: React.FC = () => {
  return <div className={classes.app}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));
