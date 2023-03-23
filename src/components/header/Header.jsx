import React from "react"
import header from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={header.header}>
      <NavLink to="/news"><img
        src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e"
        alt="logo"
      />
      <div className= {header.loginBlock}>
        {props.isAuth ? props.login
        : <NavLink to ="/login">Login</NavLink>}
      </div>
      </NavLink>
    </header>
  ); 
}

export default Header