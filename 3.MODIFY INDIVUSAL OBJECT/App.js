import React, { useState } from "react";

const App = () => {
  const [counterobj, setCounterObj] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  });

  const handleIncrement = (boxName) => {
    setCounterObj((prevCounterObj) => ({
      ...prevCounterObj,
      [boxName]: prevCounterObj[boxName] + 1,
    }));
  };

  const handleDecrement = (boxName) => {
    setCounterObj((prevCounterObj) => ({
      ...prevCounterObj,
      [boxName]: prevCounterObj[boxName] - 1,
    }));
  };

  return (
    <div className="outer-box">
      <div className="box1">
        <h1>Box-1</h1>
        <h4>Value is {counterobj.count1}</h4>
        <div className="button-box">
          <button onClick={() => handleIncrement("count1")}>Increment</button>
          <button onClick={() => handleDecrement("count1")}>Decrement</button>
        </div>
      </div>
      <div className="box2">
        <h1>Box-2</h1>
        <h4>Value is {counterobj.count2}</h4>
        <div className="button-box">
          <button onClick={() => handleIncrement("count2")}>Increment</button>
          <button onClick={() => handleDecrement("count2")}>Decrement</button>
        </div>
      </div>
      <div className="box3">
        <h1>Box-3</h1>
        <h4>Value is {counterobj.count3}</h4>
        <div className="button-box">
          <button onClick={() => handleIncrement("count3")}>Increment</button>
          <button onClick={() => handleDecrement("count3")}>Decrement</button>
        </div>
      </div>
    </div>
  );
};

export default App;
