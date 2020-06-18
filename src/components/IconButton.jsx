import React from "react";
import Icon from "./Icon";

const IconButton = ({
  title,
  onClick,
  disabled,
  iconName,
  iconSize,
  fill,
  stroke,
}) => {
  return (
    <button disabled={disabled} className="icon-button" onClick={onClick}>
      {title}
      <Icon
        name={iconName}
        width={iconSize}
        fill={fill}
        stroke={stroke}
        className="icon"
      />
    </button>
  );
};

export default IconButton;
