import React from "../lib/react.js";
import type { List, ListItem } from "../types/list.ts";
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
  const [state, setState] = React.useState(() => {
    // 컴포넌트가 초기 생성될 때 1회 실행 / 개발 모드에선 StrictMode 사용 시 2회 실행
    // 컴포넌트의 상태로 사용할 초기값 반환

    // 초기화 함수에서 할 일 : 속성,props(읽기 전용) -> 상태(컴포넌트 안에서 읽기/쓰기 가능)
    return items.map(({ onChange, ...rest }) => ({
      active: false,
      ...rest,
    }));
  });

  const handleChangeState = (selectedId: string) => {
    console.log(`toggle ${selectedId} state`);

    const nextState = state.map((item: ListItem) => {
      if (item.id === selectedId) {
        return {
          ...item,
          active: !item.active,
        };
      }
      return item;
    });

    setState(nextState);
  };

  return (
    <ul className="switch-list" style={switchStyles}>
      {state.map(({ id, active, labelText, disabled, showOnOffText }) => {
        return (
          <li key={id}>
            <Switch id={id} labelText={labelText} active={active} disabled={disabled} showOnOffText={showOnOffText} onChange={() => handleChangeState(id)}></Switch>
          </li>
        );
      })}
    </ul>
  );
}
