import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '안녕하세요 최희재 입니다',
      checked: true,
    },
    {
      id: 2,
      text: '스페이스바 스테빌 너무 구려요',
      checked: true,
    },
    {
      id: 3,
      text: '소리가 너무 탁해요',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
