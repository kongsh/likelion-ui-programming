import Switch from "../components/switch.tsx";
import React from "../lib/react.js";
import SwitchList from "../components/switch-list.tsx";
import Playground from "../components/playground.tsx";

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

function App(): React.ReactNode {
  const handleSwitch1Toggle = () => console.log("switch-1 clicked");
  const handleSwitch3Toggle = () => console.log("switch-3 clicked");

  // 데이터 추출
  const list: List = [
    {
      id: "switch-1",
      labelText: "Wi-Fi",
      onToggle: () => console.log("switch-1 clicked"),
    },
    {
      id: "switch-2",
      labelText: "Bluetooth",
      active: true,
    },
    {
      id: "switch-3",
      labelText: "Reduced Motion",
      disabled: true,
      onToggle: () => console.log("switch-3 clicked"),
    },
  ];

  return (
    <div lang="en" style={appStyles}>
      {/* <SwitchList items={list}></SwitchList> */}
      <Playground></Playground>
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
