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

//함수형 컴포넌트로 작성
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
