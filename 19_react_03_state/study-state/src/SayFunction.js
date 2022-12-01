import { useState } from "react";

const SayFunction = () => {
  const [message, setMessage] = useState("welcome!"); // ['welcome!', f]
  //   console.log(useState);
  // 'welcome': 상태(state) 초기값
  // message: 메세지 상태
  // setMessage: message 라는 state 값을 바꾸는 setter 함수

  const onClickEnter = () => setMessage("안녕하세요~");
  const onClickLeave = () => setMessage("안녕히 가세요~");

  return (
    <>
      <h1>{message}</h1>
      <button onClick={() => setMessage("HI")}>입갤</button>
      <button onClick={() => setMessage("BYE")}>퇴갤</button>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </>
  );
};

export default SayFunction;
