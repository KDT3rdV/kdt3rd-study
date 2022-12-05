import { useState } from "react";

const Eventex = () => {
  const [infos, setInfos] = useState([
    { name: "코디", email: "codi@gmail.com" },
    { name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const addList = () => {
    const newName = infos.concat({
      id: nextList,
      name: inputName,
      email: inputEmail,
    });
    setNextList(nextList + 1);
    setInfos(newName);
    setInputName("");
    setInputEmail("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };

  const deleteList = (id) => {
    // console.log(">>>", id);
    const result = infos.filter((infos) => infos.id !== id);
    setInfos(result);
  };

  const [nextList, setNextList] = useState(3);
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button onClick={addList}>등록</button>

      <h1>
        {infos.map((infos) => {
          return (
            <li
              key={infos.name}
              onDoubleClick={() => {
                deleteList(infos.id);
              }}
            >
              {infos.name}: {infos.email}
            </li>
          );
        })}
      </h1>
    </div>
  );
};

export default Eventex;
