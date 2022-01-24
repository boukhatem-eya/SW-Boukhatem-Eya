import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import * as Icons from "react-icons/fa";
import logosw from "../image/logosw.png";
import * as FcIcons from "react-icons/fc";

function Navbar() {
  return (
    <>
      <div className="content">
        <div className="navbar">
          <div className="textinput">
            <input type="text" placeholder="Search.." />
          </div>
          <div className="bellicon">
            <FcIcons.FcAdvertising />
          </div>
          <div className="homeicon">
            <Icons.FaHome />
          </div>
          <img src={logosw} alt="SW" className="swlogohome" />
        </div>
      </div>
      {
        <nav className="nav-menuactive">
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link>{item.icon}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      }
    </>
  );
}

export default Navbar;
