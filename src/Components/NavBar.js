import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <Link to='/'>
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/people'>People</Link>
                    </li>
                    <li>
                        <Link to='/locations'>Locations</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;