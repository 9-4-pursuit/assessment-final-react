import logo from "../logo/Golden-Snitch.jpeg"
import '../styles/styles.css'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="navbar">
            <Link to='/' className="nav-link" >
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <div className="menu" >
                <Link to='/movies' className="nav-link" id="link1" >
                    <p>Movies</p>
                </Link>
                <Link to='/people' className="nav-link" >
                    <p>People</p>
                </Link>
                <Link to='/locations' className="nav-link" >
                    <p>Locations</p>
                </Link>
            </div>
        </nav>
    )
    
}