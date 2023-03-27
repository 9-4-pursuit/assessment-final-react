import { Link } from "react-router-dom";
import ghibliLogo from "../Components/ghibliLogo.png";

function NavBar () {
    return (
        <nav>
            <Link to='/'>
            <img src={ghibliLogo}  alt="ghibli-logo" width="50px" height="50px" />
            </Link>

            <Link to="/movies">Movies</Link>
            <Link to="/people">People</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    );
  }
  
  export default NavBar;