import { Link } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link to="/" ><span>
            <img src="https://www.japantrendshop.com/img/products/6776/6776-2-my-neighbor-totoro-mini-flowerpot-1.jpg"
              alt="logo" /></span>
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