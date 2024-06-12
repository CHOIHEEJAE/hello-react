import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const { search } = useLocation();
  const query = search === "?name=heejae"; //url비교 boolean 값
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초 실습 예제 프로젝트</p>
      {query && <p>heejae 님 이시군요 반갑습니다!</p>}
    </div>
  );
};

export default About;
