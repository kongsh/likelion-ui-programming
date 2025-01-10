import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import { Greeting, type GreetingKey } from "./greeting";

function HeadingOne(props: { greetingMessage: string }): React.ReactElement {
  return React.createElement("h1", {}, props.greetingMessage);
}

function ChangeButton() {
  return React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        render();
      },
    },
    "인사말"
  );
}

function Wrapper(props: { message: string }): React.ReactElement {
  return React.createElement(React.Fragment, null, React.createElement(HeadingOne, { greetingMessage: props.message }), React.createElement(ChangeButton));
}

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

const keys = Object.keys(Greeting);

function render() {
  const key = keys[Math.floor(Math.random() * keys.length)];

  // 이전에 렌더링 했던 ReactDOM Tree와 다시 렌더링하는 ReactDOM Tree 비교, 변경이 있다면 DOM에 커밋
  reactDomRoot.render(React.createElement(Wrapper, { message: Greeting[key] }));
}

render();
