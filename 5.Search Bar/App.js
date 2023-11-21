import React, { useState, useEffect } from "react";

const App = () => {
  const arr = ["car", "bike", "lori", "rahul", "sachin", "virat", "sourav"];

  const [data, setData] = useState(arr);
  const [userinput, setUserInput] = useState("");
  const handleSearch = () => {
    setData(
      arr.filter((ele) => ele.toLowerCase().includes(userinput.toLowerCase()))
    );
    setUserInput("");
  };
  return (
    <div>
      <input
        type="search"
        value={userinput}
        placeholder="Search..."
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {data.length === 0 && (
          <p style={{ color: "red" }}>Search value is not avaible</p>
        )}
      </div>
      <div>
        <ul>{data && data.map((ele, i) => <li key={i}>{ele}</li>)}</ul>
      </div>
    </div>
  );
};

export default App;
