import { Link } from "react-router-dom"
import logo from '../assets/ghibli.png'

export default function NavBar(){
    return(
        <nav>
            <Link to='/'><img src={logo} alt="logo"/></Link> 
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </nav>
    )
}