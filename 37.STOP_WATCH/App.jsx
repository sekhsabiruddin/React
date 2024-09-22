import React, { useEffect, useState } from "react";

const App = () => {
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]); // Add start to the dependency array to control the interval

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    setStart(!start); // Toggle between start and pause
  };

  const handleRestart = () => {
    setSecond(0); // Reset seconds
    setStart(false); // Stop the timer
  };

  function timeFormat(second) {
    let hr = Math.floor(second / 3600);
    let min = Math.floor((second % 3600) / 60);
    let sec = second % 60;
    return `HH: ${hr}, MM: ${min}, SS: ${sec}`;
  }

  return (
    <div>
      <div>
        <span>{timeFormat(second)}</span>
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>{start ? "Pause" : "Resume"}</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default App;
