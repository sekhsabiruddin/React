import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [data, setData] = useState();

  function haldeObject(obj) {
    setData(obj);
  }

  return (
    <div style={{ border: "1px solid red" }}>
      <p>Parent Component</p>
      {data && (
        <>
          <p>name {data.name}</p>
          <p>address {data.address}</p>
          <p>email {data.email}</p>
        </>
      )}
      <Child haldeObject={haldeObject} />
    </div>
  );
};

export default Parent;
