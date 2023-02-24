import { createContext, useState } from "react";

export const Context = createContext({
  newRegister: false,
  setNewRegister: () => {},
});

export const Provider = ({ children }) => {
  const [newRegister, setNewRegister] = useState(false);

  console.log("newRegister", newRegister);
  return (
    <Context.Provider
      value={{
        newRegister,
        setNewRegister,
      }}
    >
      {children}
    </Context.Provider>
  );
};
