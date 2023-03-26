import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="nav">
            <Link to={'/'}>
            <img src="https://w7.pngwing.com/pngs/260/315/png-transparent-my-neighbor-totoro-ghibli-museum-catbus-studio-ghibli-my-neighbor-totoro-animation-totoro-mammal-carnivoran-illustrator.png" style={{ width: 50, height: 50 }} alt="Totoro logo" />
            </Link>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/people'}>People</NavLink>
            <NavLink to={'/locations'}>Locations</NavLink>
        </nav>
    )
}