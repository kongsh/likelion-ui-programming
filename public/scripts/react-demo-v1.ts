// React Programming Preview
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

// Creating React Element Node

// React API
// React.createElement(type, props, ...children)

const heading = React.createElement("h1", {}, "안녕!");

const changeBtn = React.createElement(
  "button",
  {
    type: "button",
  },
  "인사말"
);

// 의미 없는 <div> 대신 <React.Fragment>를 사용
// 실제 DOM에 렌더링 되지 않는 Fragment

const wrapper = React.createElement(
  React.Fragment,
  null,
  // ...children === React.ReactNode[]
  heading, // child 1
  changeBtn // child 2
);

// ReactDOM API (for Web)
// ReactDOM.createRoot(domElement) -> ReactDOMRoot { render, unmount }
const rootElement = document.getElementById("react"); // HTMLDivElement
const reactDomRoot = ReactDOM.createRoot(rootElement); // ReactDOMRoot

// ReactDOMRoot.render(React.ReactElement)
reactDomRoot.render(wrapper);

// React Navite API (for Mobile Native)

// 코드(React Element)를 재사용하자
// 코드 재사용 매커니즘 : 클래스 or 함수
// 리액트 월드 재사용 매커니즘 : 컴포넌트(함수)

{
  const heading = React.createElement("h1", {}, "안녕!");

  const changeBtn = React.createElement(
    "button",
    {
      type: "button",
    },
    "인사말"
  );

  // 의미 없는 <div> 대신 <React.Fragment>를 사용
  // 실제 DOM에 렌더링 되지 않는 Fragment

  const wrapper = React.createElement(
    React.Fragment,
    null,
    // ...children === React.ReactNode[]
    heading, // child 1
    changeBtn // child 2
  );
}
