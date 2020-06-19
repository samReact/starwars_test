import React from "react";

const ChartButton = ({ title, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="chart-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default ChartButton;
