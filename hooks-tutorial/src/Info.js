// 분리했던 useInputs Hook로 리팩토링

import React from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <input
        name="name"
        value={name}
        onChange={onChange}
        placeholder="이름을 입력하세요"
      ></input>
      <input
        name="nickname"
        value={nickname}
        onChange={onChange}
        placeholder="닉네임을 입력하세요"
      ></input>

      <br />
      <p>이름 : {name} </p>
      <p>닉네임 : {nickname} </p>
    </div>
  );
};

export default Info;
