import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "최희재",
    description: "리액트를 공부중인 개발자",
  },
  testdata: {
    name: "테스트",
    description: "테스트중인 개발자",
  },
};

const Profile = () => {
  // 비구조화 할당
  const { userInfo } = useParams();
  const profile = data[userInfo];
  // 비구조화 할당 하지 않으면 아래와 같이 작성함 (함수형 컴포넌트에서는 주로 비구조화 할당을 통해 객체를 배정함)
  //   const userInfo = useParam();
  //   const profile = data[userInfo.userInfo]

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다</div>;
  }

  return (
    <div>
      <h3>
        {userInfo} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
