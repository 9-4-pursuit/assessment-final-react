import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <img src="assets/voran.png" alt="Totoro Logo" width="50" height="50" />
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName="active">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/people" activeClassName="active">
              People
            </NavLink>
          </li>
          <li>
            <NavLink to="/locations" activeClassName="active">
              Locations
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
