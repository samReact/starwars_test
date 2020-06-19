import React, { useState, useContext, Fragment } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import {
  GET_BY_NAME,
  DELETE_DATASET,
  ADD_DATA,
  DELETE_DATA,
} from "../store/actions";
import { DispatchContext, StateContext } from "../pages/App";
import ChartPart from "./Chart";
import ChartButton from "../components/ChartButton";

const BASE_URL = "https://swapi.dev/api/";

const Header = ({ activeTab, setActiveTab, onClick }) => {
  const [planetName, setPlanetName] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);

  const dataSets = state.dataSets;
  const counter = state.counter;
  const labels = state.labels;
  const datas = state.datas;

  const handleChange = (e) => {
    setPlanetName(e.target.value);
  };

  const handleFocus = () => {
    setPlanetName("");
    setError(false);
  };

  const getPlanet = async (url) => {
    try {
      const response = await fetch(url);
      const parsedResponse = await response.json();
      return parsedResponse;
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchPlanet = async (e) => {
    e.preventDefault();
    try {
      const planets = await getPlanet(
        `${BASE_URL}planets/?search=${planetName}`
      );
      if (planets.count === 0) return setError(true);
      dispatch({ type: GET_BY_NAME, payload: planets });
    } catch (e) {
      console.log(e);
    }
  };
  const labelList = [
    "gravity",
    "rotation_period",
    "orbital_period",
    "diameter",
    "surface_water",
    "population",
  ];

  const addData = () => {
    let updatedDataSets = [...dataSets];
    const label = labelList[counter];
    updatedDataSets.forEach((dataset, i) => {
      dataset.data.push(datas[i][counter]);
    });
    return dispatch({ type: ADD_DATA, payload: { label, updatedDataSets } });
  };

  const deleteData = () => {
    let updatedLabels = [...labels];
    let updatedDataSets = [...dataSets];
    updatedLabels.pop();
    updatedDataSets.forEach((dataset, i) => {
      dataset.data.pop();
    });
    dispatch({
      type: DELETE_DATA,
      payload: { labels: updatedLabels, updatedDataSets },
    });
  };

  return (
    <div className="header">
      <div className="header-container">
        {activeTab === 2 && (
          <form className="form">
            <div>
              <Input
                value={planetName}
                onChange={handleChange}
                placeholder="Enter a planet name"
                onFocus={handleFocus}
                error={error}
              />
              {error && <p className="error-message"> No match !</p>}
            </div>

            {planetName.length > 0 && (
              <Button
                title="Search"
                onClick={handleSearchPlanet}
                disabled={error}
              />
            )}
          </form>
        )}
        <div className="chart">
          <ChartPart />
        </div>
      </div>

      <div className="menu-container">
        <nav className="menu">
          <ul>
            <li
              onClick={() => setActiveTab(1)}
              className={activeTab === 1 ? "active" : "undefined"}
            >
              All Planets
            </li>
            <li
              onClick={() => setActiveTab(2)}
              className={activeTab === 2 ? "active" : "undefined"}
            >
              Search a Planet
            </li>
          </ul>
        </nav>
        <div className="button-container">
          {dataSets.length > 0 && (
            <Fragment>
              {labels.length <= 5 && (
                <ChartButton title="Add Data" onClick={() => addData()} />
              )}

              <ChartButton
                title="Remove Dataset"
                onClick={() => dispatch({ type: DELETE_DATASET })}
              />
              {labels.length > 0 && (
                <ChartButton title="Remove Data" onClick={() => deleteData()} />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
