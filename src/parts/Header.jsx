import React, { useState, useContext } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import "./Header.css";
import { GET_BY_NAME } from "../store/actions";
import { DispatchContext } from "../pages/App";

const BASE_URL = "https://swapi.dev/api/";

const Header = ({ activeTab, setActiveTab, onClick }) => {
  const [planetName, setPlanetName] = useState("");
  const dispatch = useContext(DispatchContext);

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
      {activeTab === 2 && (
        <form className="form">
          <Input value={planetName} onChange={handleChange} />
          <Button title="Search" onClick={handleSearchPlanet} />
        </form>
      )}

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
    </div>
  );
};

export default Header;
