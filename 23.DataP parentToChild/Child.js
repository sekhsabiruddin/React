import React from "react";

const Child = ({ handleInput }) => {
  function childHandleInput(e) {
    let value = e.target.value;
    handleInput(value);
  }

  return (
    <div style={{ border: "1px solid green" }}>
      <h2>Child Component</h2>
      <input type="text" onChange={childHandleInput} />
    </div>
  );
};

export default Child;
