import React, { useState } from "react";
import { useCrud } from "./context/CrudContext";

const ShowData = () => {
  const { data, dispatch } = useCrud();
  const [editing, setEditing] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", email: "" });

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const handleEdit = (id) => {
    setEditing(id);
    const currentItem = data.find((item) => item.id === id);
    setEditedData({ name: currentItem.name, email: currentItem.email });
  };

  const handleSave = (id) => {
    dispatch({ type: "EDIT", payload: { id, updatedData: editedData } });
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
    setEditedData({ name: "", email: "" });
  };

  const handleInputChange = (e) => {
    setEditedData({
      ...editedData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <li>
              {editing === item.id ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                  />
                  <button onClick={() => handleSave(item.id)}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <>
                  {item.name} {item.email}
                  <button onClick={() => handleDelete(item.id)}>del</button>
                  <button onClick={() => handleEdit(item.id)}>edit</button>
                </>
              )}
            </li>
          </div>
        ))}
    </div>
  );
};

export default ShowData;
