// context/UserHooks.js
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export const useUserData = () => {
  const { usersData, addUser, editUser, deleteUser } = useContext(UserContext);

  return { usersData, addUser, editUser, deleteUser };
};
