import React, { useEffect, useMemo, useState } from "react";
import useCounter from "./useCouter";
function App() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
