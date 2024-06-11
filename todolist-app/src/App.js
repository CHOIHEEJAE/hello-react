import React, { useReducer, useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REEMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, '', createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);

  //일정추가
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  //일정제거 함수
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
    // setTodos((todos) => todos.filter((e) => e.id !== id));
  }, []);

  //일정 수정하기
  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
    // setTodos(
    //   (todos) =>
    //     todos.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e)),
    //   // 수정하고자 하는 id값의 checked값 반전
    //   [todos],
    // );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
