import { useState } from "react";

const Practice3 = () => {
  const [number, setNumber] = useState(0);

  const two = () => setNumber(number + 2);
  const one = () => setNumber(number - 1);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={two}>두개올려</button>
      <button onClick={one}>한개내려</button>
    </>
  );
};

export default Practice3;
