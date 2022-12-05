import { useRef, useState } from "react";

const RefSample2 = () => {
  // 1. ref 객체 만들기
  const id = useRef(1); // 기본값 1 설정

  const plusId = () => {
    // 2. ref.current를 로컬 변수로 사용
    id.current += 1;
    console.log("ref: ", id.current);
  };

  //  =================================
  const [num, setNum] = useState(1);

  const plusNum = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1>Ref Sample 로컬 변수</h1>
      <h2>{id.current}</h2>
      <button onClick={plusId}>Plus Ref</button>
      <h2>{num}</h2>
      <button onClick={plusNum}>Plus State</button>
    </>
  );
};

export default RefSample2;
