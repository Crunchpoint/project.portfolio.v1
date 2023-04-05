import React, { createContext, useState } from "react";
export const MyContext = createContext({} as any);

type ContextProps = {
  children: React.ReactNode;
};

export default function Context({ children }: ContextProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showRocket, setShowRocket] = useState(false);
  const values = { isOpen, setIsOpen, isReady, setIsReady, showRocket, setShowRocket };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
