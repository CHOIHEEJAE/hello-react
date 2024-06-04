import React from 'react';
import TodoListItem from './TodoListItem';
import '../css/TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todoItem={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
