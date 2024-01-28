import React, { useContext, createContext, useReducer } from "react";
// Remove the duplicate import for useContext

const crdcrtcontext = createContext();

const initalData = [
  { id: 1, name: "Rohit Kumar", email: "rohit@gmail.com" },
  { id: 2, name: "Reshma kumar", email: "Reshma@gmail.com" },
];
function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "EDIT": {
      const updatedState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.updatedData }
          : item
      );
      return updatedState;
    }
    case "DELETE": {
      const filteredState = state.filter(
        (item) => item.id !== action.payload.id
      );
      return filteredState;
    }
    default:
      return state;
  }
}

const CrudContext = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initalData);

  return (
    <crdcrtcontext.Provider value={{ data, dispatch }}>
      {children}
    </crdcrtcontext.Provider>
  );
};

export default CrudContext;

export const useCrud = () => {
  return useContext(crdcrtcontext);
};
