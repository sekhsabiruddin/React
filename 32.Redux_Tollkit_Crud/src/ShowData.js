import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, editToggle, updateData } from "./Redux/DataSlice";

const ShowData = () => {
  const data = useSelector((state) => state);
  const [editname, setEditName] = useState(""); // State for editing name
  const [editPhone, setEditPhone] = useState(""); // State for editing phone
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  const handleSave = (id) => {
    dispatch(updateData({ id, name: editname, phone: editPhone }));
  };
  const handleEdit = (id) => {
    const editValue = data.find((item) => item.id === id);
    setEditName(editValue.name); // Set name state with the name of the item being edited
    setEditPhone(editValue.phone); // Set phone state with the phone of the item being edited

    dispatch(editToggle(id));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {data &&
          data.map((value) =>
            value.edit === true ? (
              <div key={value.id}>
                <input
                  type="text"
                  value={editname} // Use editname state here
                  onChange={(e) => setEditName(e.target.value)} // Update editname state on change
                />
                <input
                  type="text"
                  value={editPhone} // Use editPhone state here
                  onChange={(e) => setEditPhone(e.target.value)} // Update editPhone state on change
                />
                <button onClick={() => handleSave(value.id)}>Save</button>
                <button onClick={() => handleEdit(value.id)}>Cancel</button>
              </div>
            ) : (
              <div key={value.id}>
                <span>{value.name}</span>
                <span>{value.phone}</span>
                <button onClick={() => handleDelete(value.id)}>Del</button>
                <button onClick={() => handleEdit(value.id)}>Edit</button>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default ShowData;
