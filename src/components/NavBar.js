import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className='head-links'>
        <NavLink to='/'>
          <li><img src='../../Studio_Ghibli_logo.png' alt='Home'/></li>
        </NavLink>

        <NavLink to='/movies'>
          <li>Movies</li>
        </NavLink>
        
        <NavLink to='/people'>
          <li>People</li>
        </NavLink>

        <NavLink to='/locations'>
          <li>Locations</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
