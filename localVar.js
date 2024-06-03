import React, { Component, useRef } from "react";

class localVar extends Component {
  // local 변수 사용하기
  id = 1;
  setId = (e) => {
    this.id = e;
    console.log(e);
  };

  printId = () => {
    console.log(this.id);
  };

  render() {
    return <div>local 변수 사용하기 </div>;
  }
}

//함수형 컴포넌트로 작성하기 ::: 렌더링과 관련되지 않은 값을 관리할 때만 이러한 식으로 사용해야함 (ref 내의 값이 바뀌어도 컴포넌트가 렌더링 되지 않기 때문)
const RefSample = () => {
  const id = useRef(1);
  const setId = (e) => {
    id.current = e;
  };

  const printId = () => {
    console.log(id.current);
  };
};

export default localVar;
