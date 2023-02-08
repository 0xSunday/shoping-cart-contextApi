import React, { createContext, useState } from "react";
export const MContext = createContext();
const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <MContext.Provider value={{ cart, setCart }}>{children}</MContext.Provider>
  );
};

export default Context;
