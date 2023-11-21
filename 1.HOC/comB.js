import React from "react";
import HOC from "./HOC";
const comB = (props) => {
  const { handleCount, count } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>+</button>
    </div>
  );
};

export default HOC(comB);
