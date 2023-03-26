import { useState, useEffect } from "react";
import { allThings } from "../services/fetch";
import Movie from "./Movie";

export default function Movies() {

    const [allFilms, setAllFilms] = useState([]);
    const [movieSelection, setMovieSelection] = useState({});
    const [movieClick, setMovieClick] = useState(false);

    async function handleLoad() {
        const answer = await allThings('films');
        setAllFilms([...answer.data]);
        // console.log(answer, allFilms);
    };

    useEffect(() => {
        handleLoad()
    }, []);

    function handleMovieSelect(event) {
        setMovieClick(true);
        const selected = allFilms.filter(movie => movie.title === event.target.value)
        setMovieSelection(selected[0])
        console.log(selected);

    }

    return (
        <div className="movies">
            <h1>Select a Movie</h1>


            <select
                name="movie-drop"
                id="movie-choices"
                onChange={handleMovieSelect}>
                <option></option>
                {
                    allFilms.map((movie) => {
                        return (
                            <option
                                value={movie.title}
                                key={movie.id}
                            >{movie.title}</option>
                        )
                    })
                }
            </select>

            <aside style={movieClick ? { display: "block" } : { display: "none" }}>
                <Movie movieSelection={movieSelection} />
            </aside>

        </div>
    )
}