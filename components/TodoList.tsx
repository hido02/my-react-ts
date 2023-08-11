import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addTodo, removeTodo } from '../store';

import Todo from './Todo';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = window.prompt('Enter a new todo:');
    if (text) {
      dispatch(addTodo(text));
    }
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo}
          onRemove={() => dispatch(removeTodo(index))}
        />
      ))}
    </div>
  );
};

export default TodoList;
