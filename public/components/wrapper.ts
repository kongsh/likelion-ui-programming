import React from "../lib/react.js";
import Heading from "../components/heading.ts";
import ChangeButton from "../components/change-button.ts";

export default function Wrapper(props: { message: string; lang: string; render: () => void }): React.ReactElement {
  return React.createElement(React.Fragment, null, React.createElement(Heading, { greetingMessage: props.message, lang: props.lang }), React.createElement(ChangeButton, { render: props.render }));
}
