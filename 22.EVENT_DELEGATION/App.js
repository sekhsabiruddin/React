import React, { useState } from "react";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (event) => {
    const clickedTab = event.target.textContent;
    setSelectedTab(clickedTab);
  };

  return (
    <>
      <div onClick={handleTabClick}>
        <li>Tab1</li>
        <li>Tab2</li>
        <li>Tab3</li>
      </div>
      <p>You have clicked: {selectedTab}</p>
    </>
  );
};

export default App;
