import Switch from "../components/switch.tsx";
import jsxRuntime from "../lib/react/jsx.runtime.js";
import React from "../lib/react.js";

/* 
  순수 함수
*/

// 순수함의 기준은? (함수형 프로그래밍 기준)
// 순수함 : "함수의 실행 결과 예측 가능".

// 순수함
function multiply(x: number, y: number): number {
  return x * y;
}

multiply(4, 5);

// query 함수는 순수하지 않음, 실행 결과가 예측 불가하기 때문
function query(selector: string, context = document): HTMLElement | null {
  return context.querySelector(selector);
}

query(".yamoo9");

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
