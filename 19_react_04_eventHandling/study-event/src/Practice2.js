import { useState } from "react";

const Practice2 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {/* <h1>{visible ? "롸?" : ""}</h1>
      <button onClick={() => setVisible(visible ? false : true)}>
        {visible ? "사라져" : "나와"}
      </button> */}
      <h1>{visible && "롸?"}</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "사라져" : "나와"}
      </button>
    </div>
  );
};

export default Practice2;
