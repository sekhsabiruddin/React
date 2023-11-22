// components/Formbox.js
import React from "react";
import { useUserData } from "../context/UserProvider";

const Formbox = () => {
  const { addUser } = useUserData(); // Use the custom hook

  const handleFormSubmit = (e) => {
    e.preventDefault();
    debugger;
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;

    addUser(name, email);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter name" />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email" />
        </div>
        <div className="input-box">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Formbox;
