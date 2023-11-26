import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const increment = () => {
    setCount(count + 1);
  };

  const incrementItem = () => {
    setItem(item + 10);
  };

  const multiply = useMemo(() => {
    for (let i = 0; i <= 100000000; i++) {}
    return count * 5;
  }, [count]);

  return (
    <>
      <h1>useMemo Hooks</h1>
      <h1>count: {count}</h1>
      <h1>item: {item}</h1>
      <h1>Multiply: {multiply}</h1>
      <br />
      <br />
      <br />
      <button onClick={increment}>count+</button>
      <button onClick={incrementItem}>item+</button>
    </>
  );
}

export default App;
