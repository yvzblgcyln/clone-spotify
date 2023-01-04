import { createContext, useState } from "react";
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const logout = () => localStorage.setItem("user", JSON.stringify(""));

  const value = { loggedIn, login, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
