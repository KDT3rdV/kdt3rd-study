import "./Practice2.css";
import React from "react";

function Practice2() {
  // JSX 문법
  // 1. 컴포넌트에 여러요소 있으면 반드시 부모 요소 하나로 감싸야 함!
  return (
    <div className="App">
      <div className="bug div1"></div>
      <div className="bug div2"></div>
      <div className="bug div3"></div>
      <div className="bug div4"></div>
      <div className="bug div5"></div>
      <div className="bug div6"></div>
      <div className="bug div7"></div>
      <img src="./public/grass.png" alt="풀" />
    </div>
  );
}

export default Practice2;
