import React, { useState, useReducer, useCallback } from "react";
import Todos from "./Todos";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, SetTodos] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  //uncommnet this u can understand the problem
  const addTodo = useCallback(() => {
    SetTodos((prev) => [...prev, "new entry"]);
  }, [todos]);

  //   const addTodo = () => {
  //     SetTodos((prev) => [...prev, "new entry"]);
  //   };

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>count:{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Callbackhook;
