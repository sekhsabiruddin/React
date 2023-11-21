import React, { useEffect, useMemo, useState } from "react";

function App() {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(true);
  const getValue = () => {
    setMyNum(myNum + 1);
  };
  const countNumber = (num) => {
    console.log("Couter num function caling.....");
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };
  //===> we should not write like this , it may be performance issue
  // const checkData = countNumber(myNum);

  //we can use like tahat
  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);
  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My new number :{checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You Cliked me " : "Clicked me plz"}
      </button>
    </>
  );
}

export default App;
