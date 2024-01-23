import React, { useState, useReducer } from "react";
import Callbackhook from "./Callbackhook";
//Note:-> useMemo it retur memorize value and useCallback memorize function both used increase performance .
//1)Here I have one file name is Callbackhook.js . In this file I am rendering Todo.js . in callBackhook.js there increment button are there if clicked incremennt Todo also render again it performance isssue .
const App = () => {
  return (
    <div>
      <Callbackhook />
    </div>
  );
};

export default App;
