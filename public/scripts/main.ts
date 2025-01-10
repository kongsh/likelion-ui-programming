import App from "../components/app";
import React from "../lib/react.js";
import ReactDom from "../lib/react-dom/client.js";

ReactDom.createRoot(document.getElementById("react")).render(React.createElement(App));
