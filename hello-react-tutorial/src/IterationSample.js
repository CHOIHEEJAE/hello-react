import React, { useState } from "react";

const IterationSample = () => {
  const [name, setName] = useState([
    { id: 1, text: "첫번째" },
    { id: 2, text: "두번째" },
    { id: 3, text: "세번째" },
    { id: 4, text: "네번째" },
    { id: 5, text: "다섯번째" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6); // 6부터 ID 값 시작

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    let nextName = name.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setName(nextName);
    setInputText("");
  };

  const onRemove = (e) => {
    let nextName = name.filter((param) => param.id !== e); // 배열 내장함수를 활용해 새로운 배열을 만든 후 수정반영
    setName(nextName);
  };

  const namesList = name.map((param) => (
    <li key={param.id}>
      {param.text}
      <button onClick={() => onRemove(param.id)}>제거하기</button>
    </li>
  ));
  //   const names = [1, 2, 3, 4, 5];
  //   const namesList = names.map((data, index) => <li key={index}>{data}</li>);
  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가하기</button>
      <ul>{namesList}</ul>
    </div>
  );
};
export default IterationSample;
