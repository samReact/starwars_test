import React from "react";
import Chart from "chart.js";
import { useRef } from "react";
import { useEffect } from "react";

import { useContext } from "react";
import { StateContext } from "../pages/App";

const ChartPart = () => {
  let chartEl = useRef(null);
  const state = useContext(StateContext);
  const dataSets = state.dataSets;
  useEffect(() => {
    new Chart(chartEl.current, {
      type: "radar",
      data: {
        labels: [
          "gravity",
          "Rotation period",
          "Orbital period",
          "diameter",
          "Surface water",
          "population",
        ],
        datasets: dataSets,
      },
      options: {
        scale: {
          ticks: {
            max: 100,
            min: 0,
            stepSize: 20,
            // suggestedMin: 0,
            // suggestedMax: 100,
          },
        },
      },
    });
  }, [dataSets]);

  return (
    <div className="chart-container">
      <canvas ref={chartEl} aria-label="planets chart" />
    </div>
  );
};

export default ChartPart;
