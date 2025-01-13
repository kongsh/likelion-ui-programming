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

const key = keys[Math.floor(Math.random() * keys.length)];

reactDomRoot.render(React.createElement(Wrapper, { message: Greeting[key] }));
