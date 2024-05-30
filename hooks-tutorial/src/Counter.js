import React, { useReducer } from "react";

function reducer(state, action) {
  //type에 따른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>현재 Counting : {state.value}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
      <button
        onClick={() =>
          state.value <= 0 ? null : dispatch({ type: "DECREMENT" })
        }
      >
        감소
      </button>
    </div>
  );
};

export default Counter;
