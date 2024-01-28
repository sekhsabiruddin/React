import React, { useState } from "react";
import { useCrud } from "./context/CrudContext";
const InputFiled = () => {
  const { dispatch } = useCrud();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions with the form data here, for example, logging it to the console
    console.log("Form data submitted:", formData);
    // Reset the form after submission
    dispatch({ type: "ADD", payload: { id: Date.now(), ...formData } });
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name..."
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email..."
        value={formData.email}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default InputFiled;
