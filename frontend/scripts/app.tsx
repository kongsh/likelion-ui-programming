import Switch from "../components/switch.tsx";
import jsxRuntime from "../lib/react/jsx.runtime.js";
import React from "../lib/react.js";

const { jsx, Fragment } = jsxRuntime;

// hyperscript
// const h = React.createElement;

function App(): React.ReactNode {
  // React Element를 생성하는 함수 실행 결과 반환
  // React 엘리먼트 반환
  const handleSwitch1Toggle = () => console.log("switch-1 clicked");
  const handleSwitch3Toggle = () => console.log("switch-3 clicked");

  return (
    <div lang="en" style={appStyles}>
      <Switch id="switch-1" labelText="switch-1" onToggle={handleSwitch1Toggle}></Switch>
      <Switch id="switch-2" labelText="switch-2" active></Switch>
      <Switch id="switch-3" labelText="switch-3" disabled onToggle={handleSwitch3Toggle}></Switch>
    </div>
  );
}

const appStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  padding: 20,
};

export default App;
