import { useReducer, useState } from "react";
import "./styles.css";

const userdata = [
  { id: 1, name: "sabir", complete: false },
  { id: 2, name: "rohit", complete: true },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const newData = action.payload;
      const newState = [...state, newData];
      return newState;
    }
    case "TOGGLE": {
      const updatedState = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, complete: !item.complete }
          : item
      );
      return updatedState;
    }
    case "DELETE": {
      const updatedState = state.filter((item) => !item.complete);
      return updatedState;
    }
    default:
      return state;
  }
}

export default function App() {
  const [data, dispatch] = useReducer(reducer, userdata);
  const [name, setName] = useState("");

  const handleAdd = () => {
    const obj = {
      id: Date.now(),
      name: name,
      complete: false,
    };
    dispatch({ type: "ADD", payload: obj });
    setName("");
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE" });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Please Enter"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
      <div>
        {data &&
          data.map((item, i) => (
            <div key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleToggle(item.id)}
                checked={item.complete}
              />
              <span>{item.name}</span>
            </div>
          ))}
      </div>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
