import React from "react";
import { NavLink } from "react-router-dom";
import { active, navList, navLink } from "./Nav.module.css";
const Nav = () => (
  <ul className={navList}>
    <li>
      <NavLink exact to="/" className={navLink} activeClassName={active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" className={navLink} activeClassName={active}>
        Movies
      </NavLink>
    </li>
  </ul>
);
export default Nav;
