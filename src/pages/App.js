import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import Footer from "../parts/Footer";
import Body from "../parts/Body";
import Header from "../parts/Header.jsx";
import { StoreContext } from "../store/rootReducer";

const BASE_URL = "https://swapi.dev/api/";

function App() {
  const [allPlanets, setAllPlanets] = useState({});
  const [ready, setReady] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [planetName, setPlanetName] = useState("");
  const [searchedPlanet, setSearchedPlanet] = useState({});

  const initialState = useContext(StoreContext);

  const getAllPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const parsedResponse = await response.json();
      setAllPlanets(parsedResponse);
      setReady(true);
    } catch (e) {
      console.log(e);
    }
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

  const handleNav = (value) => {
    if (value === "next") return getAllPlanets(next);
    getAllPlanets(previous);
  };

  const handleChange = (e) => {
    setPlanetName(e.target.value);
  };

  const handleSearchPlanet = async (e) => {
    e.preventDefault();
    try {
      const planet = await getPlanet(
        `${BASE_URL}planets/?search=${planetName}`
      );
      setSearchedPlanet(planet);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPlanets(`${BASE_URL}planets/`);
  }, []);

  const { previous, next } = allPlanets;
  const planets = allPlanets.results;
  const planet = searchedPlanet.results;

  return (
    <div className="App">
      <div className="container">
        <Header
          activeTab={activeTab}
          planetName={planetName}
          onChange={handleChange}
          onClick={handleSearchPlanet}
          setActiveTab={setActiveTab}
        />
        <Body
          activeTab={activeTab}
          planet={planet}
          ready={ready}
          planets={planets}
        />
        {activeTab === 1 && (
          <Footer previous={previous} next={next} handleNav={handleNav} />
        )}
      </div>
    </div>
  );
}

export default App;
