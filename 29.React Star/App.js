import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";

const App = () => {
  // State to track the index of the clicked star
  const [clickedIndex, setClickedIndex] = useState(null);

  // Function to handle star click
  const handleStarClick = (index) => {
    setClickedIndex(index);
    alert("You have clicked star number " + (index + 1));
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FaRegStar
          key={index}
          // Apply gold color to stars left to the clicked star
          style={{
            color: clickedIndex !== null && index <= clickedIndex ? "gold" : "",
          }}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
