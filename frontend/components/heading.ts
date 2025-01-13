import React from "../lib/react.js";

export default function Heading(props: { greetingMessage: string; lang: string }): React.ReactElement {
  return React.createElement("h1", { lang: props.lang.toLowerCase() }, props.greetingMessage);
}
