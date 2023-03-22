import React from "react"
import { NavLink } from "react-router-dom"
import Nav from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={Nav.nav}>
        <div className={Nav.item}>
          <NavLink className={Nav.NavLink} to="/profile/">
            Profile
          </NavLink>
        </div>
        <div className={Nav.item}>
          <NavLink className={Nav.NavLink} to="/users">
            Friends
          </NavLink>
        </div>
        <div className={Nav.item}>
          <NavLink className={Nav.NavLink} to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div className={Nav.item}>
          <NavLink className={Nav.NavLink} to="/music">
            Music
          </NavLink>
        </div>
        <div className={Nav.item}>
          <NavLink className={Nav.NavLink} to="/settings">
            Settings
          </NavLink>
        </div>
        <div className={Nav.quit}>
          <NavLink className={Nav.NavLink} to="/quit">
            QUIT
          </NavLink>
        </div>
      </nav>
    );
}

export default Navbar