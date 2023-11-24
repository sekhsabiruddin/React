import React, { useEffect, useState } from "react";

const App = () => {
  const imageLinks = [
    "https://source.unsplash.com/random/300x200?nature",
    "https://source.unsplash.com/random/300x200?architecture",
    "https://source.unsplash.com/random/300x200?technology",
    "https://source.unsplash.com/random/300x200?travel",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const hideCss = {
    display: "none",
  };
  const visibleCss = {
    display: "inline-block",
  };

  return (
    <div>
      <div className="img-box">
        <img src={imageLinks[currentIndex]} alt="" />
      </div>
      <button
        style={currentIndex === 0 ? hideCss : visibleCss}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        style={currentIndex === imageLinks.length - 1 ? hideCss : visibleCss}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default App;
