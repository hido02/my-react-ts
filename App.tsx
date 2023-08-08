import * as React from 'react';
import { useState } from 'react';
import { FCCounter } from './Counter';
import './style.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>My App</h1>
      <FCCounter label="Count" count={count} onIncrement={onIncrement} />
    </div>
  );
};

export default App;
