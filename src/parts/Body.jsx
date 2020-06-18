import React from "react";
import CardList from "./CardList";

import { useContext } from "react";
import { StateContext } from "../pages/App";

const Body = ({ activeTab, ready }) => {
  const state = useContext(StateContext);
  const planets = state.allPlanets.results;
  const filteredPlanets = state.filteredPlanets;

  return (
    <div className="body">
      {activeTab === 1 && <CardList ready={ready} planets={planets} />}
      {activeTab === 2 && filteredPlanets && (
        <CardList ready={ready} planets={filteredPlanets.results} />
      )}
    </div>
  );
};

export default Body;
