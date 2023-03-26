
import { Link } from "react-router-dom"

export default function Navbar() {
    

    return (
        <nav>
           <Link to="/"> <img src="./studioGhibliPic.png" alt="Oops"/></Link>
        
           <h2><Link to="/movies">Movies</Link></h2>
           <h2><Link to="/people">People</Link></h2>
           <h2><Link to="/locations">Locations</Link></h2>

        </nav>
    )
}