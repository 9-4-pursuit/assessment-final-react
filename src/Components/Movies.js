import { useState, useEffect } from "react";
import OneFilm from "./OneFilm";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSelectChange = (event) => {
        const selectedTitle = event.target.value;
        const selected = movies.find((movie) => movie.title === selectedTitle);
        setSelectedMovie(selected || null);
    };

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch("https://resource-ghibli-api.onrender.com/films/");
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchMovies();
    }, []);

    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <div className="select-movie">
                <select id="select" name="select" onChange={handleSelectChange}>
                    <option value=""></option>
                    {movies.map((movie) => (
                        <OneFilm movie={movie} key={movie.id} />
                    ))}
                </select>
            </div>
            {selectedMovie && (
                <div>
                    <h1>
                        <span>Title:</span> {selectedMovie.title}
                    </h1>
                    <p>
                        <span>Release Date:</span> {selectedMovie.release_date}
                    </p>
                    <p className="description">
                        <span><strong>Description:</strong></span> {selectedMovie.description}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Movies;