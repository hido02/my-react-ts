import React from 'react';

interface TodoProps {
  text: string;
  onRemove: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, onRemove }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Todo;
