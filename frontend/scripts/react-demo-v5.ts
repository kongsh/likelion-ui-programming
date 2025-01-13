import React from "../lib/react.js";
import { Greeting } from "./greeting";
import Wrapper from "../components/wrapper.ts";
import ReactDOM from "../lib/react-dom/client.js";

// 컴포넌트 추출(Extracting Components)

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

const langs = Object.keys(Greeting);

function render() {
  const lang = langs[Math.floor(Math.random() * langs.length)];
  const message = Greeting[lang];

  // 이전에 렌더링 했던 ReactDOM Tree와 다시 렌더링하는 ReactDOM Tree 비교, 변경이 있다면 DOM에 커밋
  reactDomRoot.render(React.createElement(Wrapper, { message, lang, render }));
}

render();
