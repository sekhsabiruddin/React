import React, { useEffect, useRef } from "react";

const App = () => {
  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);
  const inputsRef = useRef([]);
  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    if (value !== "") {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value) {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  return (
    <div>
      {Array(4)
        .fill("")
        .map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            onInput={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            style={{
              width: "50px",
              marginRight: "5px",
              textAlign: "center",
              fontSize: "24px",
            }}
          />
        ))}
    </div>
  );
};

export default App;
