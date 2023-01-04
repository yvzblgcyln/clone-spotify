import { createContext, useState } from "react";
const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState("");

  const value = { page, setPage };
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContext;
