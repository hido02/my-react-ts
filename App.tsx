import * as React from 'react';
import { useState } from 'react';
import { FCCounter } from './Counter';
import { GenericList } from './GenericList';
import './style.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const items = ["Item 1", "Item 2", "Item 3"];

  const itemRenderer = (item: string) => {
    return <div key={item}>{item}</div>;
  };

  return (
    <div>
      <h1>My App</h1>
      <FCCounter label="Count" count={count} onIncrement={onIncrement} />
      <GenericList items={items} itemRenderer={itemRenderer} />
    </div>
  );
};

export default App;
