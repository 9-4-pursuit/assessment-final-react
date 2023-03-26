import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {

    return (
        <header>
            <nav>
                <NavLink to='/'>
                <li>Home</li>
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
            </nav>
            
        </header>
    )
}

export default Header