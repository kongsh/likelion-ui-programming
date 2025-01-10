import React from "../lib/react.js";

const { createElement: h } = React;

interface BoxProps {
  // 필수
  children: React.ReactNode;
  // 선택
  style?: Record<string, string | number>;
  size?: "small" | "big";
  className: string;
}

export default function Box({ style, size, className, children = "박스" }: BoxProps) {
  const sizeClassName = size ? ` box--${size}` : "";
  const newClassName = className ? ` ${className}` : "";

  const classNames = `box${sizeClassName}${newClassName}`;

  return h(
    // type
    "div",
    // props
    {
      className: classNames,
      style: {
        backgroundColor: "#171c28",
        ...style,
      },
    },
    // ...children
    children
  );
}
