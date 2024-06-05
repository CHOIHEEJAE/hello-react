import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  //일정추가
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  //일정제거 함수
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((e) => e.id !== id));
    },
    [todos],
  );

  //일정 수정하기
  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e)),
      // 수정하고자 하는 id값의 checked값 반전
      [todos],
    );
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
