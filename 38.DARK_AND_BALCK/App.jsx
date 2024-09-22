import React, { useEffect, useState } from "react";
import "./App.css"; // Add your CSS file for light/dark styles

const App = () => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    // Check local storage for theme preference on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme class to body and save preference in local storage
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div
        className="h-[100vh] w-[100%]"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
        }}
      ></div>
    </div>
  );
};

export default App;
