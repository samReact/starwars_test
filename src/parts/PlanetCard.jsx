import React, { useContext } from "react";

import { DispatchContext, StateContext } from "../pages/App";
import { ADD_DATASET } from "../store/actions";
import { useState } from "react";
import { useEffect } from "react";

const PlanetCard = ({ planet }) => {
  const [disabled, setDisabled] = useState(undefined);
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const dataSets = state.dataSets;
  const labels = state.labels;

  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    gravity,
    surface_water,
    population,
  } = planet;
  const populationNumber = parseInt(population, 10);
  const orbitalNumber = Math.floor(parseInt(orbital_period, 10) / 10);
  const diameterNumber = Math.floor(parseInt(diameter, 10) / 100);
  const rotationNumber = Math.floor(parseInt(rotation_period, 10) * 3);

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const colors = [
    ["rgba(0, 30, 98,0.2)", "rgba(0, 30, 98,1)"],
    ["rgba(254, 80, 0,0.2)", "rgba(254, 80, 0,1)"],
    ["rgba(60, 174, 68,0.2)", "rgba(60, 174, 68,1)"],
    ["rgba(200, 200, 0,0.2)", "rgba(200, 200, 0,1)"],
    ["rgba(0, 14, 44,0.2)", "rgba(0, 14, 44,1)"],
    ["rgba(202, 113, 72,0.2)", "rgba(202, 113, 72,1)"],
  ];

  const handleClick = () => {
    if (!disabled) {
      const randomNumber = getRandomInt(6);
      const dataColors = colors[randomNumber];
      let gravityNumber = gravity.match(/([0-9]*[.])?[0-9]+/);
      if (gravityNumber) {
        gravityNumber = gravityNumber[0] * 50;
      } else {
        gravityNumber = 0;
      }

      const datas = [
        gravityNumber,
        rotationNumber > 100 ? 100 : rotationNumber,
        orbitalNumber > 100 ? 100 : orbitalNumber,
        diameterNumber > 100 ? 100 : diameterNumber,
        surface_water,
        populationNumber > 0 ? 100 : 0,
      ];

      const dataSet = {
        label: name,
        data: [],
        backgroundColor: dataColors[0],
        borderColor: dataColors[1],
        borderWidth: 1,
      };
      if (labels.length > 0) {
        labels.map((label, i) => {
          dataSet.data.push(datas[i]);
        });
      }
      if (dataSets.length < 6)
        dispatch({ type: ADD_DATASET, payload: { dataSet, datas } });
    }
  };
  useEffect(() => {
    const disabled = dataSets.find((elt) => elt.label === name);
    if (disabled) {
      return setDisabled("disabled ");
    }
    setDisabled(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSets]);

  return planet ? (
    <div className={`planet-card ${disabled}`} onClick={handleClick}>
      {name}
    </div>
  ) : null;
};

export default PlanetCard;
