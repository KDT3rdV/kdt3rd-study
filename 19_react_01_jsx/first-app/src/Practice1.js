import "./Practice1.css";
import React from "react";

function Practice1() {
  const name = "Tom";
  const animal = "dog";

  const title = "Hello World";

  const a = 5;
  const b = 2;

  // JSX 문법
  // 1. 컴포넌트에 여러요소 있으면 반드시 부모 요소 하나로 감싸야 함!
  return (
    <div className="App">
      이것은 div입니다
      <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      <h2>제 반려동물의 이름은 {name} 입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <p>{3 + 5 === 8 ? <h3>정답입니다!</h3> : <h3>오답입니다!</h3>}</p>
      <p>{a > b && <h3>a가 b보다 큽니다</h3>}</p>
      <div className="test">{title}</div>
      아이디:
      <input type="text" className="input" />
      <br />
      비밀번호:
      <input type="text" className="input" />
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
    </div>
  );
}

export default Practice1;
