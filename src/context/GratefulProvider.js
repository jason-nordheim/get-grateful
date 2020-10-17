import React, { useReducer } from "react";
import { GratefulContext } from "./GratefulContext";

/*
 * Higher Order component to Inject Global Application Context,
 */
export const GratefulProvider = ({ reducer, initialState, children }) => (
  <GratefulContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GratefulContext.Provider>
);

export default GratefulProvider;
