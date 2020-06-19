import {
  GET_ALL_PLANETS,
  GET_BY_NAME,
  DELETE_DATASET,
  ADD_DATASET,
  ADD_DATA,
  DELETE_DATA,
} from "./actions";

export const initialState = {
  allPlanets: {},
  filterPlanets: {},
  dataSets: [],
  counter: 0,
  labels: [],
  datas: [],
};

function reducer(state, action) {
  switch (action.type) {
    case GET_ALL_PLANETS:
      return { ...state, allPlanets: action.payload };
    case GET_BY_NAME:
      return { ...state, filteredPlanets: action.payload };
    case ADD_DATASET:
      let updatedDatas = [...state.datas];
      updatedDatas.push(action.payload.datas);
      return {
        ...state,
        dataSets: [...state.dataSets, action.payload.dataSet],
        datas: updatedDatas,
      };
    case DELETE_DATASET:
      let updatedDataSets = new Array(...state.dataSets);
      let updatedDatas2 = [...state.datas];
      updatedDataSets.pop();
      updatedDatas2.pop();
      return { ...state, dataSets: updatedDataSets, datas: updatedDatas2 };
    case ADD_DATA:
      let updatedLabels = [...state.labels];
      updatedLabels.push(action.payload.label);
      return {
        ...state,
        counter: state.counter + 1,
        labels: updatedLabels,
        dataSets: action.payload.updatedDataSets,
      };
    case DELETE_DATA:
      return {
        ...state,
        counter: state.counter - 1,
        labels: action.payload.labels,
        dataSets: action.payload.updatedDataSets,
      };

    default:
      throw new Error();
  }
}

export default reducer;
