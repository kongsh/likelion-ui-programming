import Switch from "../components/switch.tsx";
import jsxRuntime from "../lib/react/jsx.runtime.js";
import React from "../lib/react.js";

// hyperscript
// const h = React.createElement;

type ListItem = {
  id: string;
  labelText: string;
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  onToggle?: () => void;
};

type List = ListItem[];

// 데이터 추출
const list: List = [
  {
    id: "switch-1",
    labelText: "switch-1",
    onToggle: () => console.log("switch-1 clicked"),
  },
  {
    id: "switch-2",
    labelText: "switch-2",
    active: true,
  },
  {
    id: "switch-3",
    labelText: "switch-3",
    disabled: true,
    onToggle: () => console.log("switch-3 clicked"),
  },
];

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log("switch-1 clicked");
  const handleSwitch3Toggle = () => console.log("switch-3 clicked");

  const renderListItemElements: ListItem[] = [];

  for (let i: number = 0, l: number = list.length; i < l; ++i) {
    const listItem: ListItem = list[i];

    renderListItemElements.push(<Switch id={listItem.id} labelText={listItem.labelText} active={listItem.active} disabled={listItem.disabled} onToggle={listItem.onToggle} showOnOffText={listItem.showOnOffText}></Switch>);
  }

  renderListItemElements.push(<Switch id="switch-4" labelText="Read a book" active showOnOffText></Switch>);

  return (
    <div lang="en" style={appStyles}>
      {renderListItemElements}
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
