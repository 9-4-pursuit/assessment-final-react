import { Link } from "react-router-dom"


export default function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/people'>People</Link>
            <Link to='/locations'>Locations</Link>
        </nav>
    )
}