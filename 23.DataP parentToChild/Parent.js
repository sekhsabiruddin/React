import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [data, setData] = useState("");
  function handleInput(value) {
    setData(value);
  }
  return (
    <div style={{ border: "1px solid red" }}>
      <h2>Parentn Component</h2>
      <p>{data}</p>
      <Child handleInput={handleInput} />
    </div>
  );
};

export default Parent;
