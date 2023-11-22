// UserProvider.js
import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  const addUser = (name, email) => {
    const newUser = { id: Date.now(), name, email };
    setUsersData([...usersData, newUser]);
  };

  const editUser = (id, name, email) => {
    const updatedUsers = usersData.map((user) =>
      user.id === id ? { ...user, name, email } : user
    );
    setUsersData(updatedUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = usersData.filter((user) => user.id !== id);
    setUsersData(updatedUsers);
  };

  const contextValue = {
    usersData,
    addUser,
    editUser,
    deleteUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

export const useUserData = () => {
  const { usersData, addUser, editUser, deleteUser } = useContext(UserContext);

  return { usersData, addUser, editUser, deleteUser };
};
