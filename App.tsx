import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Redux Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
