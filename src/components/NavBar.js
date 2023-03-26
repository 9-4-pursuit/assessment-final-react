import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <nav>
            <Link to="/">
                <img
                    src="https://w7.pngwing.com/pngs/652/1013/png-transparent-black-fur-susuwatari-noiraude-studio-ghibli-ghibli-museum-anime-others-face-head-my-neighbor-totoro-thumbnail.png"
                    alt="Ghibli Icon"
                    style={{ width: "50px", height: "50px" }} />
            </Link>

            <Link to="/movies">Movies</Link>
            <Link to="/people">People</Link>
            <Link to="/locations">Locations</Link>
        </nav>
    )
}

