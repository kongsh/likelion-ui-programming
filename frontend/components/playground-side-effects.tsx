import React from "../lib/react.js";

/* 상위(부모) 컴포넌트 -------------------------------------------------------------- */

const ENDPOINT = "https://my-json-server.typicode.com/yamoo9/assets/vowels";

export default function Playground() {
  const items: string[] = ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack (React) Query", "React Icons", "Zustand"];

  const handleRenderingListFromAsyncData = async () => {
    return fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const reactElement = document.getElementById("react");

        reactElement?.insertAdjacentHTML(
          "beforeend",
          /* html */ `
            <ul>
              ${data
                .map((item: { name: string }) => {
                  return /* html */ `<li>${item.name}</li>`;
                })
                .join("")}
            </ul>
          `
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="playground">
      <button
        type="button"
        onClick={async () => {
          await handleRenderingListFromAsyncData();
        }}
      >
        delete list element
      </button>
      <List list={items} />
    </div>
  );
}

/* 하위(자식) 컴포넌트 -------------------------------------------------------------- */

// 입력된 컴포넌트 속성(props)의 리스트 데이터 렌더링
// JSX 인라인 리스트 렌더링 (for문 또는 Array.prototype.map 활용)
function List({ list }: { list: string[] }) {
  // 1. for문 사용
  // const listItems: React.ReactElement[] = [];
  // // listItems -> React.ReactElement[] === React Children
  // for (let index = 0; index < list.length; index++) {
  //   const item = list[index];
  //   listItems.push(<li key={index}>{item}</li>);
  // }

  // 2. Array.prototype.map 메서드 사용
  // const listItems = list.map((item, index) => {
  //   return <li key={index}>{item}</li>;
  // });
  // const listItems = list.map((item, index) => <li key={index}>{item}</li>);

  // 3. JSX 내부에 직접 Array.prototype.map 메서드 사용
  return (
    <ul className="list">
      {/* React.ReactElement */}
      {/* children prop */}
      {list.map((item) => (
        <ListItem key={item.toString().toLowerCase().replace(/\./g, "_")}>{item}</ListItem>
      ))}
    </ul>
  );
}

/* 하위(자손) 컴포넌트 -------------------------------------------------------------- */
function ListItem(props: { key: string; children?: React.ReactNode }) {
  return <li>{props.children}</li>;
}
