import React, { useState } from "react";

const App = () => {
  const valueArray = ["value1", "value2", "value3"];
  const itemArray = ["item1", "item2", "item3"];
  const [valueArr, setValueArr] = useState(valueArray);
  const [itemArr, setItemArr] = useState(itemArray);

  const handleClickValue = (e) => {
    let val = e.target.innerText;

    // Add the clicked item to the valueArr
    setValueArr((prevValueArr) => [...prevValueArr, val]);

    // Remove the clicked item from the itemArr
    setItemArr((prevItemArr) => prevItemArr.filter((value) => value !== val));
  };

  const handleClickItem = (e) => {
    let val = e.target.innerText;

    // Add the clicked item to the itemArr
    setItemArr((prevItemArr) => [...prevItemArr, val]);

    // Remove the clicked item from the valueArr
    setValueArr((prevValueArr) =>
      prevValueArr.filter((value) => value !== val)
    );
  };

  return (
    <div>
      <div>
        <h2>Item List</h2>
        <div onClick={handleClickItem}>
          {/* Map over valueArr to display items */}
          {valueArr && valueArr.map((val, i) => <p key={i}>{val}</p>)}
        </div>
      </div>

      <div>
        <h2>Value List</h2>
        <div onClick={handleClickValue}>
          {/* Map over itemArr to display items */}
          {itemArr && itemArr.map((val, i) => <p key={i}>{val}</p>)}
        </div>
      </div>
    </div>
  );
};

export default App;
