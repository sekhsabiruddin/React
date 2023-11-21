import React, { useState, useEffect } from "react";

const App = () => {
  const [gender, Setgender] = useState("");
  const [color, Setcolor] = useState("");
  const [buttonclicked, SetButtonClicked] = useState(false);
  const radioValue = (e) => {
    Setgender(e.target.value);
    SetButtonClicked(false);
  };
  const optionHnadle = (e) => {
    Setcolor(e.target.value);
    SetButtonClicked(false);
  };
  const handleSubmit = () => {
    SetButtonClicked(true);
  };
  return (
    <div>
      <div>
        <label forMTMl="transgender">Transgender</label>
        <input
          type="radio"
          name="gender"
          value={"transgender"}
          onChange={radioValue}
        />
        <label forMTMl="transgender">Male</label>
        <input
          type="radio"
          name="gender"
          onChange={radioValue}
          value={"male"}
        />
        <label forMTMl="transgender">Female</label>
        <input
          type="radio"
          name="gender"
          onChange={radioValue}
          value={"female"}
        />
      </div>
      <br />

      <div>
        <select onChange={optionHnadle}>
          <option>Red</option>
          <option>Green</option>
          <option>blue</option>
        </select>
      </div>
      <br />
      <div>
        <button onClick={handleSubmit}>Submit</button>
        {buttonclicked && gender && color && (
          <p>
            {" "}
            I ma {gender} color is {color}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
