import { NavLink } from "react-router-dom"
import HomeIcon from "../Home-Icon.png"

export default function Header() {
    return (
        <div>

            <nav>
                <ul>

                    <NavLink to="/"> <li><img height='50px' width='50px' src={HomeIcon} alt="home"/></li> </NavLink>
                    <NavLink to="/movies"> <li>Movies</li> </NavLink>
                    <NavLink to="/people"> <li>People</li> </NavLink>
                    <NavLink to="locations"> <li>Locations</li> </NavLink>


                </ul>
                

            </nav>
            
        </div>
    )
}