import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <Link to="/" ><span>
                        <img src="https://www.pngkey.com/png/full/198-1987150_totoro-studio-ghibli-logo.png" alt="ghibli-logo" /></span>
                    </Link>
                    <ul className="nav-links">
                        <li>
                            <Link to="/movies" >
                                <span>Movies</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/people" >
                                <span>People</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/locations" >
                                <span>Locations</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}