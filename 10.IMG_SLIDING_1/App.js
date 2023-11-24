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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className="img-box">
        <img src={imageLinks[currentIndex]} alt="" />
      </div>
      <button style={{ marginRight: "8px" }} onClick={handleNext}>
        Next
      </button>
      <button onClick={handlePrev}>Prev</button>
    </div>
  );
};

export default App;
