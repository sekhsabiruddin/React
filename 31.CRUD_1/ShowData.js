import React, { useState, useEffect } from "react";

const ShowData = ({ data, dispatch }) => {
  // Local state to manage input values
  const [editableData, setEditableData] = useState(data);

  useEffect(() => {
    setEditableData(data);
  }, [data]);

  const handleInputChange = (id, field, value) => {
    setEditableData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSave = (id) => {
    dispatch({
      type: "SAVE",
      payload: editableData.find((item) => item.id === id),
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DEL", payload: id });
  };

  const handleEdit = (id) => {
    dispatch({ type: "EDIT", payload: id });
  };

  return (
    <div>
      {editableData &&
        editableData.map((value) =>
          value.edit === true ? (
            <div key={value.id}>
              <input
                type="text"
                value={value.name}
                onChange={(e) =>
                  handleInputChange(value.id, "name", e.target.value)
                }
              />
              <input
                type="text"
                value={value.email}
                onChange={(e) =>
                  handleInputChange(value.id, "email", e.target.value)
                }
              />
              <button onClick={() => handleSave(value.id)}>Save</button>
            </div>
          ) : (
            <div key={value.id}>
              <span>
                {value.name} {value.email}
              </span>
              <span>
                <button onClick={() => handleDelete(value.id)}>Del</button>
                <button onClick={() => handleEdit(value.id)}>Edit</button>
              </span>
            </div>
          )
        )}
    </div>
  );
};

export default ShowData;
