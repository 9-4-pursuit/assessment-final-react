import { Link } from "react-router-dom";
import ghibliLogo from "../components/ghibliLogo.png";

function NavBar() {
    return (
      <div className="nav">
        <nav>
            <Link to='/'>
            <img src={ghibliLogo}  alt="ghibli-logo" width="50px" height="50px" />
            </Link>

            <Link to="/movies">
                <li>Movies</li>
            </Link>

            <Link to="/people">
                <li>People</li>
            </Link>

            <Link to="/locations">
                <li>Locations</li>
            </Link>
            
        </nav>
      </div>
    );
  }
  
  export default NavBar;