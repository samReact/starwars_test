import React from "react";
import Chart from "chart.js";
import { useRef } from "react";
import { useEffect } from "react";

import "./Chart.css";

const ChartPart = () => {
  let chartEl = useRef(null);

  useEffect(() => {
    new Chart(chartEl.current, {
      type: "radar",
      label: "tatooine",
      data: {
        labels: [
          "Rotation period",
          "Orbital period",
          "diameter",
          "gravity",
          "Surface water",
          "population",
        ],
        datasets: [
          {
            label: "tatouine",
            data: [20, 10, 4, 2, 30, 40],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
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
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartEl} aria-label="planets chart" />
    </div>
  );
};

export default ChartPart;
