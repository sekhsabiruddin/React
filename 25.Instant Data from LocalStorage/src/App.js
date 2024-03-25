import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  const handleSave = () => {
    const obj = {
      id: Date.now(),
      name: value,
    };
    const oldValue = JSON.parse(localStorage.getItem("data")) || [];
    const newData = [...oldValue, obj];
    localStorage.setItem("data", JSON.stringify(newData));
    setUserData(newData); // Update state to reflect changes immediately
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      {userData.map((item, i) => (
        <div key={i}>
          <span>{item.id}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
