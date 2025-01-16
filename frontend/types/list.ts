import React from "../lib/react.js";

export type ListItem = {
  id: string;
  labelText: string;
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  onChange?: () => void;
};

export type List = ListItem[];
