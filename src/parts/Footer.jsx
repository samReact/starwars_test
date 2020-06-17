import React from "react";

import Button from "../components/Button";
import "./Footer.css";

const Footer = ({ previous, next, handleNav }) => {
  return (
    <footer className="footer">
      {previous && <Button title="Prev" onClick={() => handleNav("prev")} />}
      {next && <Button title="Next" onClick={() => handleNav("next")} />}
    </footer>
  );
};

export default Footer;
