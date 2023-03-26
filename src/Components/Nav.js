import { NavLink } from "react-router-dom";
import logo from "../images/ghibli-logo.png"

export default function Nav() {
    return (
        <nav>
            
                <NavLink to="/"> 
                    <li> <img src={logo} className='ghibli-logo' /> </li>
                </NavLink>

                <NavLink to="/movies"> 
                    <li> Movies </li>
                </NavLink>

                <NavLink to="/people"> 
                    <li> People </li>
                </NavLink>

                <NavLink to="/locations"> 
                    <li> Locations </li>
                </NavLink>
            
        </nav>
    );
  }
  