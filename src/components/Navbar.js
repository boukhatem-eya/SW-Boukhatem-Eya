import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as Icons from "react-icons/fa";

function Navbar() {

  return (
    <>
<div className='navbar'>
  <div>
    <Icons.FaSearch /><input type="text" /></div>
<Link className="navbar-logo">
          NATURE
          <Icons.FaTree />
        </Link>
<nav className='nav-menu'>
          <ul className='navbar-menu-items'>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link >
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>
        {/* <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link >
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
    </>
  );
}

export default Navbar;
