import React from "react";
import PlanetCard from "./PlanetCard";

import "./CardList.css";

const CardList = ({ ready, planets }) => {
  return ready ? (
    <div className="card-list content">
      {planets.map((planet) => (
        <PlanetCard planet={planet} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default CardList;
