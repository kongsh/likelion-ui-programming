import React from "../lib/react.js";
import Calculators from "./calculators.ts";

const { createElement: h } = React;

export default function App() {
  return h(
    "div",
    {
      className: "app",
      // React에선 집합 안에 있는 각 원소에 고유한 key를 설정해야 함
    },
    h(Calculators)
  );
}
