// --------------------------------------------------------------------------
// ✅ Switch 컴포넌트 작성(실습)
// --------------------------------------------------------------------------
// - [x] switch 역할(role) 설정
// - [x] aria-checked 속성을 사용해 ON/OFF 상태 설정
// - [x] ON/OFF 텍스트를 화면에 표시하더라도 aria-hidden 속성을 사용해 읽지 않도록 설정
// - [x] 사용자가 Space, Enter(옵션) 키를 눌렀을 때 작동되도록 설정
// - [x] 비활성 상태인 경우, aria-disabled 속성을 사용해 설정
// --------------------------------------------------------------------------

import React from "../lib/react.js";

const { createElement: h } = React;

interface Switch {
  id: string;
  labelText: string;
  active?: boolean; // on/off
  disabled?: boolean;
  showOnOffText?: boolean;
}

export default function Switch({ id, labelText, active = false, disabled = false, showOnOffText = false }: Switch) {
  let isActive = active;

  if (disabled) {
    isActive = false;
  }

  let switchText: "OFF" | "ON" | null = "OFF";

  if (isActive) {
    switchText = "ON";
  }
  if (!showOnOffText) {
    switchText = null;
  }

  const switchTextNode = switchText ? h("span", { className: "switch-text", "aria-hidden": true }, switchText) : null;

  return h(
    "div",
    {
      className: "switch",
    },
    h(
      "label",
      null,
      h("span", { className: "label-text" }, labelText),
      h("input", {
        role: "switch",
        type: "checkbox",
        defaultChecked: isActive,
        disabled,
        id,
      }),
      switchTextNode
    )
  );
}
