import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

// const heading = React.createElement("h1", {}, "안녕!");

// 리액트 컴포넌트의 Naming Convention : Pascal Case (HTML 태그와 겹치지 않게)
function HeadingOne() {
  // 리액트 엘리먼트 (생성 후) 반환
  return React.createElement("h1", {}, "안녕!");
}

// const changeBtn = React.createElement(
//   "button",
//   {
//     type: "button",
//   },
//   "인사말"
// );

function ChangeButton() {
  return React.createElement(
    "button",
    {
      type: "button",
    },
    "인사말"
  );
}

// const wrapper = React.createElement(React.Fragment, null, heading, changeBtn);

function Wrapper() {
  return React.createElement(React.Fragment, null, React.createElement(HeadingOne), React.createElement(ChangeButton));
}

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

reactDomRoot.render(React.createElement(Wrapper));

// 효과적인 리액트 컴포넌트(함수)의 재사용(유용성)
// 리액트 컴포넌트가 외부에서 전달받아야 할 것들 : ?

function HeadingDemo(props: { elementName: string; content: string }): React.ReactElement {
  return React.createElement(props.elementName, {}, props.content);
}

const element = React.createElement(HeadingDemo, {
  elementName: "h1",
  content: "안녕!",
});

console.log(element);
