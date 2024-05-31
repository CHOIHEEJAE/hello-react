import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    debugger;
    dispatch(e.target);
  };
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
