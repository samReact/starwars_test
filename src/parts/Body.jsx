import React from "react";
import CardList from "./CardList";
import PlanetCard from "./PlanetCard";

import "./Body.css";

const Body = ({ activeTab, planet, ready, planets }) => {
  return (
    <div className="body">
      {activeTab === 1 && <CardList ready={ready} planets={planets} />}
      {activeTab === 2 && (
        <div className="content">
          {planet && <PlanetCard planet={planet[0]} />}
        </div>
      )}
    </div>
  );
};

export default Body;
