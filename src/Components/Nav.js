import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
