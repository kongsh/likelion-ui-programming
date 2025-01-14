import React from "../lib/react.js";
import type { List } from "../types/list.ts";
import Switch from "./switch.tsx";

interface SwitchListProps {
  items: List;
}

export default function SwitchList(props: SwitchListProps) {
  return (
    <ul
      className="switch-list"
      style={{
        display: "flex",
        flexFlow: "column",
        gap: 12,
      }}
    >
      {props.items.map((item, index) => {
        return (
          <li key={index}>
            <Switch id={item.id} labelText={item.labelText} active={item.active} disabled={item.disabled} onToggle={item.onToggle} showOnOffText={item.showOnOffText}></Switch>
          </li>
        );
      })}
    </ul>
  );
}
