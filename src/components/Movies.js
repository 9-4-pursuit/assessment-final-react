import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allThings } from "../services/fetch";
import Movie from "./Movie";

export default function Movies() {

    const [allFilms, setAllFilms] = useState([]);
    const [movieSelection, setMovieSelection] = useState({});
    const [showContent, setShowContent] = useState(false);

    async function handleLoad() {
        const answer = await allThings('films');
        setAllFilms(answer.data);
        console.log(answer, allFilms);
    };

    useEffect(() => {
        handleLoad()
    }, []);

    return (
        <div className="movies">
            <h1>Select a Movie</h1>

            <select name="movie-drop" id="movie-choices">
                <option hidden></option>
                {
                    allFilms.map((movie) => {
                        return (
                            <option
                                value={movie.id}
                                key={movie.id}
                            >{movie.title}</option>
                        )
                    })
                }
            </select>
            {/* <Movie allFilms={allFilms} /> */}
        </div>
    )
}