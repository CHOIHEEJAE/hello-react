import React, { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 ... ");
  if (numbers.length === 0) {
    return 0;
  } else {
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  }
};

const Average = () => {
  const [list, setList] = useState([]); // 배열 비구조화 할당
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // useCallback : 두번째 파라미터가 빈 값일 경우 , 컴포넌트 첫 렌더링 때만 호출
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    },
    [number, list]
  ); // number 혹은 list 값이 변경될 때 마다 호출

  const avg = useMemo(() => getAverage(list), [list]); // 두번째 파라미터인 [list]가 변경될 때 getAverage 함수 실행

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>
        <p>평균값 : {avg}</p>
      </div>
    </div>
  );
};

// useCallback 예시 (위 아래 같은 코드)
// useCallback(() => {
//   console.log("hello world!");
// }, []);

// useMemo(() => {
//   const func = () => {
//     console.log("hello world");
//   };
//   return func;
// }, []);

export default Average;
