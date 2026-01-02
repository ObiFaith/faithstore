import { reducer } from "./reducer";
import { StoreContext } from "./context";
import type { StoreState } from "./type";
import React, { useReducer } from "react";

const initialState: StoreState = {
  products: [],
  cart: [],
  favourite: [],
};

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
