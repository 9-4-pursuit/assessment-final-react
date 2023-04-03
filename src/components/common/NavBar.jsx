import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <img src={require("../../assets/studio-ghibli.png")} alt="studio-ghibli" />
      </NavLink>

      <NavLink to="/movies">Movies</NavLink>

      <NavLink to="/people">People</NavLink>

      <NavLink to="/locations">Locations</NavLink>
    </nav>
  )
}

export default NavBar;