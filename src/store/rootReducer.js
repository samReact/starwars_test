import { GET_ALL_PLANETS, GET_BY_NAME } from "./actions";

export const initialState = {
  allPlanets: {},
  filterPlanets: {},
};

function reducer(state, action) {
  switch (action.type) {
    case GET_ALL_PLANETS:
      return { ...state, allPlanets: action.payload };
    case GET_BY_NAME:
      return { ...state, filteredPlanets: action.payload };
    default:
      throw new Error();
  }
}

export default reducer;
