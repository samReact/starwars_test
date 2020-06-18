import React from "react";

import Button from "../components/Button";

const Footer = ({ previous, next, handleNav }) => {
  return (
    <footer className="footer">
      <div className="content">
        <Button
          title="Prev"
          disabled={!previous}
          onClick={() => handleNav("prev")}
        />
        <Button
          title="Next"
          disabled={!next}
          onClick={() => handleNav("next")}
        />
      </div>
    </footer>
  );
};

export default Footer;
