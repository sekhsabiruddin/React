import React, { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState([
    { id: 1, placeholder1: "Enter name", placeholder2: "Enter lastname" },
  ]);

  const handleAddMore = () => {
    const newInputs = [
      ...inputs,
      {
        id: inputs.length + 1,
        placeholder1: `Enter first name`,
        placeholder2: `Enter second name`,
      },
    ];

    setInputs(newInputs);
  };

  const handleRemove = (id) => {
    const updatedInputs = inputs.filter((input) => input.id !== id);
    setInputs(updatedInputs);
  };

  return (
    <>
      {inputs.map((input) => (
        <div key={input.id}>
          <input type="text" placeholder={input.placeholder1} />
          <input type="text" placeholder={input.placeholder2} />
          <button onClick={() => handleRemove(input.id)}>REMOVE</button>
        </div>
      ))}
      <button onClick={handleAddMore}>ADD MORE</button>

      <button>SUBMIT</button>
    </>
  );
};

export default App;
