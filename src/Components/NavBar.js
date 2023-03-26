import { Link } from "react-router-dom";
import logo2 from "./../Resources/logo2.png";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo2} alt="Ghibli Logo" className="image"/>
      </Link>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
