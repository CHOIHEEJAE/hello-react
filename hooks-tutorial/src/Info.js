import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect((props) => {
    console.log("useEffect ::: ", props);
    console.log({ name, nickname });

    return () => {
      console.log("cleanUp function");
      console.log(name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input
        value={name}
        onChange={onChangeName}
        placeholder="이름을 입력하세요"
      ></input>
      <input
        value={nickname}
        onChange={onChangeNickname}
        placeholder="닉네임을 입력하세요"
      ></input>

      <br />
      <p>이름 : {name} </p>
      <p>닉네임 : {nickname} </p>
    </div>
  );
};

export default Info;
