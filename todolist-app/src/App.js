import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: '안녕하세요 최희재 입니다',
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   text: '스페이스바 스테빌 너무 구려요',
    //   checked: true,
    // },
    // {
    //   id: 3,
    //   text: '소리가 너무 탁해요',
    //   checked: false,
    // },
  ]);

  const nextId = useRef(0);

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

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
