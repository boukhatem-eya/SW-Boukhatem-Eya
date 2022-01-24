import React from "react";
import "./Menu.css";
function Menu() {
  return (
    <>
      <ul className="ul_menu">
        <li className="li_menu" activeClassName="active">
          Liste des utilisateurs
        </li>
        <li className="li_menu" activeClassName="active">
          Information entreprise
        </li>
      </ul>
    </>
  );
}

export default Menu;
