import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} />
      ))}
    </div>
  );
};

export default TodoList;
