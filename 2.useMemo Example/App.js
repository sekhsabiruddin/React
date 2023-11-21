import React, { useEffect, useMemo, useState } from "react";
import ComA from "./comA"; // Use PascalCase
import ComB from "./comB"; // Use PascalCase

function App() {
  const [count, setCount] = useState(0);
  const [iteam, setIteam] = useState(0);
  //==>If i Click iteam countMultiple function call every . it is performance issue
  // function countMultiple() {
  //   return count * 5;
  // }

  //===>Instead above method we can use useMemo . whenever count value will change that time it will be run . if item value is chnage that time it will be not run .
  const countMulvalue = useMemo(
    function countMultiple() {
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>Normal Count : {count}</h1>
      <h1>Normal iteam : {iteam}</h1>
      <h1>Multple Value:{countMulvalue} </h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setIteam(iteam + 1)}>iteam</button>
    </>
  );
}

export default App;
