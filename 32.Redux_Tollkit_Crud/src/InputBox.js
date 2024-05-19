import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addData } from "./Redux/DataSlice";
const InputBox = (e) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please Enter the value");
    }
    dispatch(addData({ id: Date.now(), name, phone, edit: false }));
    setName("");
    setPhone("");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            style={{ outline: "none" }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="phone number"
            style={{ outline: "none" }}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
    </div>
  );
};

export default InputBox;
