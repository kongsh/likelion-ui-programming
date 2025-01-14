import React from "../lib/react.js";
import type { List } from "../types/list.ts";
import Switch from "./switch.tsx";

interface SwitchListProps {
  items: List;
}

export default function SwitchList(props: SwitchListProps) {
  const renderListItems = props.items.map((item) => {
    return (
      <li>
        <Switch id={item.id} labelText={item.labelText} active={item.active} disabled={item.disabled} onToggle={item.onToggle} showOnOffText={item.showOnOffText}></Switch>
      </li>
    );
  });

  console.log({ renderListItems });

  return (
    <ul
      className="switch-list"
      style={{
        display: "flex",
        flexFlow: "column",
        gap: 12,
      }}
    >
      {renderListItems}
    </ul>
  );
}
