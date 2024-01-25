import React, { useState } from "react";

const Child = ({ haldeObject }) => {
  const [obj, setObj] = useState({ name: "", address: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log("Form submitted with values:", obj);
    haldeObject(obj);
    setObj({ name: "", address: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj((prevObj) => ({ ...prevObj, [name]: value }));
  };

  return (
    <div style={{ border: "1px solid green" }}>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={obj.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={obj.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={obj.email}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Child;
