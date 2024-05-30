import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(0);
  const onClickIn = () => {
    setMessage(message + 1);
    console.log("+1");
  };
  const onCLickOut = () => {
    setMessage(message - 1);
    console.log("-1");
  };

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickIn}>+1</button>
      <button onClick={onCLickOut}>-1</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        RED
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        BLUE
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        GREEN
      </button>
    </div>
  );
};

export default Say;
