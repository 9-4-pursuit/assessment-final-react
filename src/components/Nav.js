import logo from "../logo/Golden-Snitch.jpeg"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <Link to='/' className="nav-link" >
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <div className="menu" >
                <Link to='/movies' id="link1" >
                    <p>Movies</p>
                </Link>
                <Link to='/people' >
                    <p>People</p>
                </Link>
                <Link to='/locations' >
                    <p>Locations</p>
                </Link>
            </div>
        </nav>
    )
    
}