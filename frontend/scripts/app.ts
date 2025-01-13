import Switch from "../components/switch.ts";
import React from "../lib/react.js";

// hyperscript
const h = React.createElement;

function App(): React.ReactNode {
  // React Element를 생성하는 함수 실행 결과 반환
  // React 엘리먼트 반환
  return h(
    "div",
    {
      lang: "en",
      style: appStyles,
    },
    h(Switch, { id: "switch-1", labelText: "switch-1", showOnOffText: true }),
    h(Switch, { id: "switch-2", labelText: "switch-2", active: true, showOnOffText: true }),
    h(Switch, { id: "switch-3", labelText: "switch-3", disabled: true })
  );
}

const appStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  padding: 20,
};

export default App;
