import React from "react";

export const initialState = {
  allPlanets: {},
};

export const StoreContext = React.createContext(initialState);

const reducer = (action, state) => {
  return {
    ...state,
  };
};

export default reducer;
