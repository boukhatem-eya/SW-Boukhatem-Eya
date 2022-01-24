import React from "react";
import "./holdbar.css";
import * as Icons from "react-icons/fa";

function Holdbar() {
  return (
    <div className="holdbar">
      <div className="check1">
        <label>Activer</label>
        <input name="check1" type="checkbox" checked />
      </div>
      <div className="check2">
        <label>En Attente</label>
        <input name="check2" type="checkbox" />
      </div>
      <div className="search">
        <Icons.FaSearch />
      </div>
      <div className="search">
        <Icons.FaSearch />
      </div>
      <div className="search">
        <Icons.FaUserPlus />
      </div>
    </div>
  );
}
export default Holdbar;
