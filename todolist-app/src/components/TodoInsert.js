import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../css/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); //브라우저 새로고침방지하기
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="일정을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

// 일정항목 추가 기능 구현
// 인풋상태 관리 및 todos 배열 내 새로운 객체 추가 함수 구현
// 1. todo insert value 상태관리
