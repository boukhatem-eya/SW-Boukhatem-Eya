import React from "react";
import { UsersData } from "./UsersData";
import "./Users.css";

function Users() {
  return (
    <div className="users">
      <ul className="users_ul">
        {UsersData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <div className="divicon">{item.icon}</div>
              <div className="divname">{item.name}</div>
              <div className="divetat">{item.etat}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
