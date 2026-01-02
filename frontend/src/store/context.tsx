import React, { createContext } from "react";
import type { StoreAction, StoreState } from "./type";

export const StoreContext = createContext<{
  state: StoreState;
  dispatch: React.Dispatch<StoreAction>;
} | null>(null);
