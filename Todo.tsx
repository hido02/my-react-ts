import React, { useState } from 'react';

interface TodoProps {
  text: string;
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{text}</span>
    </div>
  );
};

export default Todo;
