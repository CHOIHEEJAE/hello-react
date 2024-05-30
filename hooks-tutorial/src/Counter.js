import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0); // useState 사용방법

  return (
    <div>
      <h1>현재 Counting : {value}</h1>
      <button onClick={() => setValue(value + 1)}>증가</button>
      <button onClick={() => (value === 0 ? null : setValue(value - 1))}>
        감소
      </button>
    </div>
  );
};

export default Counter;
