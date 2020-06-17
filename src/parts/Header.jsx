import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import "./Header.css";

const Header = ({
  activeTab,
  planetName,
  onChange,
  handleSearchPlanet,
  setActiveTab,
  onClick,
}) => {
  return (
    <div className="header">
      {activeTab === 2 && (
        <form className="form">
          <Input value={planetName} onChange={onChange} />
          <Button title="Search" onClick={onClick} />
        </form>
      )}

      <nav className="menu">
        <ul>
          <li
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 ? "active" : "undefined"}
          >
            All Planets
          </li>
          <li
            onClick={() => setActiveTab(2)}
            className={activeTab === 2 ? "active" : "undefined"}
          >
            Search a Planet
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
