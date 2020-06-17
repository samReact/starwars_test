import React from "react";

import "./PlanetCard.css";

const PlanetCard = ({ planet }) => {
  return planet ? <div className="planet-card">{planet.name}</div> : null;
};

export default PlanetCard;
