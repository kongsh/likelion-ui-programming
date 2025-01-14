import React from "../lib/react.js";

export default function Playground() {
  const [count, setCount] = React.useState(9);

  return (
    <div className="playground">
      <h1>플레이그라운드</h1>

      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
