import React from "../lib/react.js";
import type { List } from "../types/list.ts";
import Switch from "./switch.tsx";

interface SwitchListProps {
  items: List;
}

const switchStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  listStyle: "none",
  paddingInlineStart: 0,
};

export default function SwitchList({ items }: SwitchListProps) {
  // 상태 관리
  const [state, setState] = React.useState({
    submission: false,
    review: false,
    myLevel: true,
  });

  const handleStateChange = (stateName: string): void => {
    const nextState = {
      ...state,
      [stateName]: !state[stateName],
    };
    setState(nextState);
  };

  return (
    <ul className="switch-list" style={switchStyles}>
      <li>
        <Switch id="sw-4" labelText="과제 제출" active={state.submisson} onChange={() => handleStateChange("submission")}></Switch>
      </li>
      <li>
        <Switch id="sw-5" labelText="복습" active={state.review} onChange={() => handleStateChange("review")}></Switch>
      </li>
      <li>
        <Switch id="sw-6" labelText="수준 진단" active={state.myLevel} onChange={() => handleStateChange("myLevel")}></Switch>
      </li>
      {false &&
        items.map((item) => {
          return (
            <li key={item.id}>
              <Switch id={item.id} labelText={item.labelText} active={item.active} disabled={item.disabled} onChange={item.onToggle} showOnOffText={item.showOnOffText}></Switch>
            </li>
          );
        })}
    </ul>
  );
}
