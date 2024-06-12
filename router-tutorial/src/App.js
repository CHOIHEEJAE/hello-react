import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;

// HEEJAE TODO
// https://kyung-a.tistory.com/36#4._URL_Params_%EC%9D%BD%EB%8A%94%EB%B2%95_(match_%EA%B0%9D%EC%B2%B4)
// react-router-dom v6 릴리즈 후 차이점 참고
