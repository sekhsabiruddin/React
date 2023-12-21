import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { CounterProvider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CounterProvider>
    <App />
  </CounterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
