import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CrudContext from "./context/CrudContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CrudContext>
      <App />
    </CrudContext>
  </React.StrictMode>
);
