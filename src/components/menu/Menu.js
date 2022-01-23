import React from "react"
import { NavLink } from "react-router-dom"
import "./Menu.css"
function Menu() {

  return (
    <>
      <ul className="ul_menu">
        <li className="li_menu">
          <NavLink
            to="/users"
            activeClassName="active"
            isActive={(_, { pathname }) =>
              pathname.match("/hello") || pathname === "/"
            }
          >
            Users
          </NavLink>{" "}
        </li>
        <li className="li_menu">
          <NavLink to="/info" activeClassName="active">
            Info
          </NavLink>
          {/* <Link to="/tasks"> My tasks</Link> */}
        </li>
      </ul>
    </>
  )
}

export default Menu
