import React from "react";

const Input = ({ onChange, value }) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="custom-input"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
