
import { Link } from "react-router-dom";
import "./Nav.css";



function Nav() {
    return (

        <nav className="navbar">
      <Link to="/" className="logo">
        <img src="https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-movie-icon-%E2%80%93-stock-vector.jpg" alt="logo" width="50" height="50"/>
      </Link>
      <br></br>
      <Link to="/movies" className="nav-link">Movies</Link>
      <br></br>
      <Link to="/people" className="nav-link">People</Link>
      <br></br>
      <Link to="/locations" className="nav-link">Locations</Link>

    </nav>
    )
}

export default Nav;