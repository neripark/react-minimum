import * as React from "react";
import ReactDOM from "react-dom";
import TestButton from "./TestButton"

const target = document.querySelector(".target");
ReactDOM.render(
  <TestButton>これはボタンです。</TestButton>,
  target
);
