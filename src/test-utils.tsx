// test-utils.js
import React from "react";
import { useGlobal, GlobalContext } from "./context";

export const AllTheProviders = ({
  children,
  initialState,
  globalOverrides
}: {
  children: any;
  initialState: any;
  globalOverrides: any;
}) => {
  const globalValues = useGlobal(initialState);
  return (
    <GlobalContext.Provider value={{ ...globalValues, ...globalOverrides }}>
      {children}
    </GlobalContext.Provider>
  );
};
