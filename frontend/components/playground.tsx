import React from "../lib/react.js";

/* 상위(부모) 컴포넌트 -------------------------------------------------------------- */

export default function Playground() {
  const items: string[] = ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack (React) Query", "React Icons", "Zustand"];

  // 부수 효과 (리액트 렌더링 프로세스와 관련 없는 일들)
  const handleChangeListStyles = () => {
    // DOM 엘리먼트에 접근해 스타일 조작 (명령형 프로그래밍)
    const listElement = document.querySelector<HTMLUListElement>("ul.list");

    if (listElement) {
      listElement.style.cssText = `
      margin: 20px;
      border: 4px solid rgba(0 0 0 / 15%);
      padding-inline-start: 0;
      list-style: none;
    `;
    }
  };

  return (
    <div className="Playground">
      <button type="button" onClick={handleChangeListStyles}>
        change list styles
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
