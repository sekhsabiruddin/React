// components/Showdata.js
import React, { useState } from "react";
import { useUserData } from "../context/UserProvider";

const Showdata = () => {
  const { usersData, editUser, deleteUser } = useUserData();
  console.log("usersData", usersData);

  const [editUserData, setEditUserData] = useState({
    id: null,
    name: "",
    email: "",
  });

  const handleEdit = (id) => {
    // Find the user with the given id
    const userToEdit = usersData.find((user) => user.id === id);

    // Set the state to populate the edit form
    setEditUserData({
      id: userToEdit.id,
      name: userToEdit.name,
      email: userToEdit.email,
    });
  };

  const handleUpdate = () => {
    // Call the editUser function with updated data
    editUser(editUserData.id, editUserData.name, editUserData.email);

    // Reset the editUserData state
    setEditUserData({
      id: null,
      name: "",
      email: "",
    });
  };

  const handleDelete = (id) => {
    // Call the deleteUser function
    deleteUser(id);
  };

  return (
    <div className="show-data">
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUserData.id && (
        <div>
          <h2>Edit User</h2>
          <form>
            <label htmlFor="editName">Name</label>
            <input
              type="text"
              id="editName"
              value={editUserData.name}
              onChange={(e) =>
                setEditUserData({ ...editUserData, name: e.target.value })
              }
            />

            <label htmlFor="editEmail">Email</label>
            <input
              type="text"
              id="editEmail"
              value={editUserData.email}
              onChange={(e) =>
                setEditUserData({ ...editUserData, email: e.target.value })
              }
            />

            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Showdata;
