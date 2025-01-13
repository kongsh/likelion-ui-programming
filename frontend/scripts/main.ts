import App from "../components/app";
import React from "../lib/react.js";
import ReactDom from "../lib/react-dom/client.js";

const root = document.getElementById("react");

if (!root) {
  alert("문서에 #react 요소가 존재하지 않습니다.");
} else {
  ReactDom.createRoot(root).render(React.createElement(App));
}
