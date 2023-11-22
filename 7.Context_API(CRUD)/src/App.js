// App.js
import React from "react";
import UserProvider from "./context/UserProvider";
import Formbox from "./components/Formbox";
import Showdata from "./components/Showdata";

const App = () => {
  return (
    <UserProvider>
      <Formbox />
      <Showdata />
    </UserProvider>
  );
};

export default App;
