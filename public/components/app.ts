import React from "../lib/react.js";
import Calculator from "./calculator.ts";

export default function App() {
  return React.createElement("div", {
    className: "app",
    children: [React.createElement(Calculator), React.createElement(Calculator, { operator: "-" }), React.createElement(Calculator, { elements: [10, 2] })],
  });
}
