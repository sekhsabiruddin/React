import React, { useEffect, useMemo, useState } from "react";
import useCounter from "./useCouter";
import Child from "./Child";
function App() {
  const [userdetails, setUserDetails] = useState(null);
  const getUserData = (name, eamil) => {
    setUserDetails({ name, eamil });
  };
  return (
    <>
      <Child getUserData={getUserData} />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1>Parent Componenet</h1>
      {userdetails && (
        <>
          <span>Name {userdetails.name}</span>
          <span>Name {userdetails.eamil}</span>
        </>
      )}
    </>
  );
}

export default App;
