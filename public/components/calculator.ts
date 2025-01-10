import React from "../lib/react.js";

// HTML = Hyper Text Markup Language
// h = hyperscript
const { createElement: h } = React;

const operations = {
  "+": (left: number, right: number): number => left + right,
  "-": (left: number, right: number): number => left - right,
  "*": (left: number, right: number): number => left * right,
  "/": (left: number, right: number): number => left / right,
};

export default function Calculator(props: { elements?: [number, number]; operator: "-" | "+" | "*" | "/" | "%" }) {
  const operator = props.operator ?? "+";

  let left = 0;
  let right = 0;

  if (props.elements) {
    [left, right] = props.elements;
  }

  const outputValue: number = operations[operator](left, right);

  return h(
    "div",
    {
      className: "calculator",
    },
    h("code", null, `${left} ${operator} ${right} = `, h("output", null, outputValue))
  );
}
