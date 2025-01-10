import React from "../lib/react.js";
import Calculator from "./calculator.ts";

const { createElement: h } = React;

export default function App() {
  return h("div", {
    className: "app",
    // React에선 집합 안에 있는 각 원소에 고유한 key를 설정해야 함
    children: [
      // 1
      h(Calculator, { key: "child-1" }),
      // 2
      h(Calculator, { key: "child-2", operator: "-" }),
      // 3
      h(Calculator, { key: "child-3", elements: [10, 2] }),
      // 4
      h(Calculator, { key: "child-4", elements: [10, -3], operator: "*" }),
      // 5
      h(Calculator, { key: "child-5", elements: [, 6], operator: "/" }),
    ],
  });
}
