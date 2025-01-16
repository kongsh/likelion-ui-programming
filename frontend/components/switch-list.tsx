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
  const [submission, setSubmission] = React.useState(true);

  return (
    <ul className="switch-list" style={switchStyles}>
      <li>
        <Switch
          id="sw-4"
          labelText="과제 제출"
          active={submission}
          onToggle={() => {
            setSubmission(!submission);
          }}
        ></Switch>
      </li>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Switch id={item.id} labelText={item.labelText} active={item.active} disabled={item.disabled} onToggle={item.onToggle} showOnOffText={item.showOnOffText}></Switch>
          </li>
        );
      })}
    </ul>
  );
}
