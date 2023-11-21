import React, { useState } from "react";

const Child = ({ getUserData }) => {
  const [name, setName] = useState("");
  const [eamil, setEmail] = useState("");
  const AddhandleButton = () => {
    getUserData(name, eamil);
    setName("");
    setEmail("");
  };
  return (
    <div>
      <h1>Listing State up (child component)</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter the name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the eamil"
        value={eamil}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => AddhandleButton()}>Add</button>
    </div>
  );
};

export default Child;
