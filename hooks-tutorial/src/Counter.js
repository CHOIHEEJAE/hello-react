import React, { useReducer } from "react";

//컴포넌트 업데이트 로직
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
  //첫번째 파라미터에는 리듀서 함수, 두번째 파라미터에는 해당 리듀서 함수의 기본값 세팅
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //state 는 현재 상태, dispatch는 액션을 발생시키는 함수로 씀

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
