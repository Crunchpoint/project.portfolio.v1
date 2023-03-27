import React, { createContext } from "react";
export const MyContext = createContext({});

type ContextProps = {
  children: React.ReactNode;
};

function Context({ children }: ContextProps) {
  const values = {};

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}

export default Context;
