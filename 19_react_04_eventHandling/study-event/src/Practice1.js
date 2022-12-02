import { useState } from "react";

const Practice1 = () => {
  const [text, setText] = useState("검정색");
  const [color, setColor] = useState("black");

  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
      <button
        onClick={() => {
          setText("빨간색");
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setText("파란색");
          setColor("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default Practice1;
