import React, { useState, useContext } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import "./Header.css";
import { GET_BY_NAME, REMOVE_DATA_SETS } from "../store/actions";
import { DispatchContext, StateContext } from "../pages/App";
import ChartPart from "./Chart";

const BASE_URL = "https://swapi.dev/api/";

const Header = ({ activeTab, setActiveTab, onClick }) => {
  const [planetName, setPlanetName] = useState("");
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const dataSets = state.dataSets;

  const handleChange = (e) => {
    setPlanetName(e.target.value);
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
      dispatch({ type: GET_BY_NAME, payload: planets });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        {activeTab === 2 && (
          <form className="form">
            <Input value={planetName} onChange={handleChange} />
            <Button title="Search" onClick={handleSearchPlanet} />
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
        <div style={{ textAlign: "center" }}>
          {dataSets.length > 0 && (
            <Button
              title="remove"
              onClick={() => dispatch({ type: REMOVE_DATA_SETS })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
