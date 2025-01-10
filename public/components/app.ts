import React from "../lib/react.js";
import Box from "./box.ts";

const { createElement: h } = React;

export default function App() {
  return h(
    "div",
    {
      className: "app",
      // React에선 집합 안에 있는 각 원소에 고유한 key를 설정해야 함
    },
    // 1
    h(
      Box,
      {
        className: "box--circle",
        id: "i'm-box",
        "aria-label": "나는 박스다!",
        title: "나는 박스다!",
        translate: "no",
      },
      "기본 박스"
    ),
    // 2
    h(
      Box,
      {
        style: {
          backgroundColor: "#0388d1",
          borderRadius: 20,
        },
        size: "small",
        className: "pizza",
      },
      "작은 박스"
    ),
    // 3
    h(
      Box,
      {
        size: "big",
        style: {
          backgroundColor: "#1550ff",
          borderRadius: 6,
        },
      },
      "큰 박스"
    )
  );
}
