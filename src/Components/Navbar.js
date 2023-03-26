import React from "react"
import { Link } from "react-router-dom";

function Navbar () {

    return (
        <nav>
          <div className='navbar'>
            <ul className='nav-links'>
                <li>
                    <Link to="/">Home</Link>
                </li>
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
      );
    };
    
export default Navbar;