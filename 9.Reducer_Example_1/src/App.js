// App.js
import React, { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((ele) => ele.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterData = data.filter(
      (ele) => ele.fname === fname || ele.lname === lname
    );
    if (filterData.length > 0 || !fname || !lname) {
      alert("Duplicate data and input empty not allowed");
      return;
    }

    const obj = {
      id: Date.now(),
      fname,
      lname,
    };
    dispatch({ type: "ADD", payload: obj });
    setFname("");
    setLname("");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFname("");
    setLname("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <form>
        <div className="input-box">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={fname}
            placeholder="Enter the fname"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={lname}
            placeholder="Enter the Lname"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="input-box">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
      <div className="data-show-box">
        <div className="data-container">
          {data.map((ele) => (
            <div key={ele.id} className="inner-box">
              <span>
                Fname: <span>{ele.fname} </span>Lname: <span>{ele.lname}</span>
              </span>
              <button onClick={() => handleDelete(ele.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
