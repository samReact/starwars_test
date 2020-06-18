import React from "react";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button disabled={disabled} className="custom-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
