import React from "../lib/react.js";

export default function Playground() {
  // 구조 분해 할당 가능
  const [loveIcons, setLoveIcons] = React.useState("❤");
  console.log(loveIcons);

  return (
    <div className="playground">
      <h1>플레이그라운드</h1>
      <p className="message">I LOVE {loveIcons}</p>
      <button
        type="button"
        aria-label="하트"
        onClick={() => {
          setLoveIcons(loveIcons + "❤");
          console.log("love +1", loveIcons);
        }}
      >
        <svg width="24" height="24" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      </button>
    </div>
  );
}
