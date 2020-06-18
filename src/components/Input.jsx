import React from "react";

const Input = ({ onChange, value, placeholder, onFocus, error }) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className={`custom-input ${error ? "error" : undefined}`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
};

export default Input;
