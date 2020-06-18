import React from "react";
import { ReactComponent as Delete } from "../assets/svg/atom_icon_delete.svg";

const Icon = (props) => {
  switch (props.name) {
    case "delete":
      return <Delete {...props} />;
    default:
      return null;
  }
};

export default Icon;
