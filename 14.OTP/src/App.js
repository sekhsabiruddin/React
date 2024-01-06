import React, { useState, useRef } from "react";

const App = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      <h1>Please enter your OTP</h1>
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          type="number"
          ref={ref}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default App;
