import { NavLink } from "react-router-dom";
import '../css/Nav.css';

export default function Nav() {

    return (
        <header>
        <NavLink to="/" className='logo-link'> <strong> THE Logo. </strong> </NavLink>
            <nav>
                <ul>
                    <NavLink to="/"> <li> Home </li> </NavLink>
                    <NavLink to='/movies'> <li> Movies </li> </NavLink>
                    <NavLink to='/people'> <li> People </li> </NavLink>
                    <NavLink to='/locations'> <li> Locations </li> </NavLink> 
                </ul>
            </nav>
        </header>
    )
}