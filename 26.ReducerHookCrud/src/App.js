import React, { useReducer, useState } from "react";

const initialState = [
  { id: Date.now(), name: "sabir", phone: "9732376133", edit: false },
  { id: Date.now() + 1, name: "rohit", phone: "8016839521", edit: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, { ...action.payload, id: Date.now(), edit: false }];
    case "DELETE_ENTRY":
      return state.filter((entry) => entry.id !== action.payload);
    case "EDIT_ENTRY":
      return state.map((entry) =>
        entry.id === action.payload
          ? { ...entry, edit: true }
          : { ...entry, edit: false }
      );
    case "SAVE_ENTRY":
      return state.map((entry) =>
        entry.id === action.payload.id
          ? { ...action.payload.data, edit: false }
          : entry
      );
    default:
      return state;
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editName, setEditName] = useState(""); // Changed from editSetName to setEditName
  const [editPhone, setEditPhone] = useState(""); // Changed from editSetPhone to setEditPhone

  const handleSubmit = () => {
    const newEntry = { name, phone };
    dispatch({ type: "ADD_ENTRY", payload: newEntry });
    setName("");
    setPhone("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ENTRY", payload: id });
  };

  const handleEdit = (id) => {
    dispatch({ type: "EDIT_ENTRY", payload: id });
    const newData = data.find((value) => value.id === id); // Corrected the comparison operator
    setEditName(newData.name); // Changed from editSetName to setEditName
    setEditPhone(newData.phone); // Changed from editSetPhone to setEditPhone
  };

  const handleSave = (id) => {
    const updatedEntry = { id, data: { name: editName, phone: editPhone } }; // Used editName and editPhone
    dispatch({ type: "SAVE_ENTRY", payload: updatedEntry });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter the name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter the phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {data.map((value, i) =>
          value.edit ? (
            <div key={i}>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)} // Changed from setName to setEditName
              />
              <input
                type="text"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)} // Changed from setPhone to setEditPhone
              />
              <button onClick={() => handleSave(value.id)}>Save</button>
              <button onClick={() => handleDelete(value.id)}>
                Cancel
              </button>{" "}
              {/* Changed from null to value.id */}
            </div>
          ) : (
            <div key={i}>
              <span>{value.name}</span>
              <span>{value.phone}</span>
              <button onClick={() => handleDelete(value.id)}>Delete</button>
              <button onClick={() => handleEdit(value.id)}>Edit</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;
