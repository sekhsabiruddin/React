import React, { useReducer, useState } from "react";
import ShowData from "./ShowData";
const initial = [];
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DEL":
      return state.filter((value) => value.id !== action.payload);
    case "EDIT":
      return state.map((value) => {
        if (value.id === action.payload) {
          return { ...value, edit: true };
        }
        return value;
      });
    case "SAVE":
      return state.map((value) =>
        value.id === action.payload.id
          ? { ...action.payload, edit: false }
          : value
      );
    default:
      return state;
  }
}

export const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [data, dispatch] = useReducer(reducer, initial);
  const handleSubmit = (e) => {
    console.log("name", name, "email", email);
    e.preventDefault();
    const obj = {
      id: Date.now(),
      name,
      email,
      edit: false,
    };
    dispatch({ type: "ADD", payload: obj });
    setName("");
    setEmail("");
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      <ShowData data={data} dispatch={dispatch} />
    </div>
  );
};
export default App;
