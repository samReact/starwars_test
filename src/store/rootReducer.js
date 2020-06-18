import {
  GET_ALL_PLANETS,
  GET_BY_NAME,
  ADD_DATA_SETS,
  REMOVE_DATA_SETS,
} from "./actions";

export const initialState = {
  allPlanets: {},
  filterPlanets: {},
  dataSets: [],
};

function reducer(state, action) {
  switch (action.type) {
    case GET_ALL_PLANETS:
      return { ...state, allPlanets: action.payload };
    case GET_BY_NAME:
      return { ...state, filteredPlanets: action.payload };
    case ADD_DATA_SETS:
      return { ...state, dataSets: [...state.dataSets, action.payload] };
    case REMOVE_DATA_SETS:
      let updatedDataSets = new Array(...state.dataSets);
      updatedDataSets.pop();
      return { ...state, dataSets: updatedDataSets };

    default:
      throw new Error();
  }
}

export default reducer;
