import { createContext, useState, useEffect } from "react";

export const GrantsContext = createContext();

export const GrantsProvider = ({ children }) => {
  const [fundedGrants, setFundedGrants] = useState(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("fundedGrants");
      return storedData ? JSON.parse(storedData) : null;
    }
    return null;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("fundedGrants", JSON.stringify(fundedGrants));
    }
  }, [fundedGrants]);

  return (
    <GrantsContext.Provider value={{ fundedGrants, setFundedGrants }}>
      {children}
    </GrantsContext.Provider>
  );
};
