import React, { useState } from "react";
import Chart from "chart.js";
import { useRef } from "react";
import { useEffect } from "react";

import { useContext } from "react";
import { StateContext } from "../pages/App";

const ChartPart = () => {
  let chartEl = useRef(null);
  const state = useContext(StateContext);
  const [chart, setChart] = useState();

  const dataSets = state.dataSets;
  const labels = state.labels;

  useEffect(() => {
    let chart = new Chart(chartEl.current, {
      type: "radar",
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        scale: {
          ticks: {
            min: 0,
          },
        },
      },
    });
    setChart(chart);
  }, []);

  useEffect(() => {
    if (chart) {
      chart.data.datasets = dataSets;
      chart.update();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSets]);

  useEffect(() => {
    if (chart) {
      chart.data.labels = labels;
      chart.update();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels]);

  return (
    <div className="chart-container">
      <canvas ref={chartEl} aria-label="planets chart" />
    </div>
  );
};

export default ChartPart;
