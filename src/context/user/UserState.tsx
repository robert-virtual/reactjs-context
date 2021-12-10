import axios from "axios";
import { FC, useReducer } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from "./UserReducer";

export const InitState = {
  users: [],
  User: null,
};

export const getUsers = async () => {
  const { data } = await axios.get("https://reqres.in/api/users");
  console.log(data.data);
};
export const getProfile = async (id: number) => {
  const res = await axios.get("https://reqres.in/api/users/" + id);
  console.log(res);
};
export const UserState: FC = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, InitState);
  return (
    <UserContext.Provider value={{ ...state, getUsers, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
