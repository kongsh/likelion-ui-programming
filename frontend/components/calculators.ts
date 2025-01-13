import React from "../lib/react.js";
import Calculator from "./calculator.ts";

const { createElement: h, Fragment } = React;

export default function Calculators() {
  return h(
    Fragment,
    null,
    // 1
    h(Calculator),
    // 2
    h(Calculator, { operator: "-" }),
    // 3
    h(Calculator, { elements: [10, 2] }),
    // 4
    h(Calculator, { elements: [10, -3], operator: "*" }),
    // 5
    h(Calculator, { elements: [, 6], operator: "/" })
  );

  // props.children은 배열 (고유 값으로 각 항목에 key 설정 권장)
  // return (
  //   h(Calculator, { key: "child-1" }),
  //   // 2
  //   h(Calculator, { key: "child-2", operator: "-" }),
  //   // 3
  //   h(Calculator, { key: "child-3", elements: [10, 2] }),
  //   // 4
  //   h(Calculator, { key: "child-4", elements: [10, -3], operator: "*" }),
  //   // 5
  //   h(Calculator, { key: "child-5", elements: [, 6], operator: "/" })
  // );
}
