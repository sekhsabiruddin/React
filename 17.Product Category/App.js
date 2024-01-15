import React, { useState } from "react";

function App() {
  const [gender, setGender] = useState(""); // Added useState for the gender

  return (
    <>
      <label htmlFor="gender">Select Gender:</label>
      <select
        name="gender"
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {gender === "male" ? (
        <ul>
          <li>Shirts</li>
          <li>Facial-grooming kits </li>
          <li>Hair styling </li>
          <li>Jeans </li>
          <li>Shoes </li>
        </ul>
      ) : (
        <ul>
          <li>Tops</li>
          <li>Skirts </li>
          <li>Makeup items </li>
          <li>Jewellery </li>
          <li>Sandals </li>
        </ul>
      )}
    </>
  );
}

export default App;
