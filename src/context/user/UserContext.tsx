import { createContext } from "react";
import { getProfile, getUsers, InitState } from "./UserState";

export const UserContext = createContext({
  ...InitState,
  getUsers,
  getProfile,
});
