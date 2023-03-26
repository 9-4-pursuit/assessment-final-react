import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav">
            <Link to='/'>
                <h1>Home</h1>
            </Link>

            <Link to='/movies'>
                <h1>Movies</h1>
            </Link>

            <Link to='/people'>
                <h1>People</h1>
            </Link>
            
            <Link to='/locations'>
                <h1>Locations</h1>
            </Link>
        </nav>
    )
}

export default Nav