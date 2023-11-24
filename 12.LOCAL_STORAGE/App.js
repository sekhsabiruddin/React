import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    debugger;
    const obj = {
      id: Date.now(),
      name,
      email,
    };

    // Retrieve existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("data")) || [];

    // Add the new object to the array
    const newData = [...existingData, obj];

    // Save the updated array back to localStorage
    localStorage.setItem("data", JSON.stringify(newData));

    // Update the state to trigger a re-render with the latest data
    setData(newData);

    // Clear the input fields after submitting
    setName("");
    setEmail("");
  };

  useEffect(() => {
    // Fetch and update data from localStorage on component mount
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>

      <div>
        <h2>User Data:</h2>
        <ul>
          {Array.isArray(data) &&
            data.map((user) => (
              <li key={user.id}>
                Name: {user.name}, Email: {user.email}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
