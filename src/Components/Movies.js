import MovieCard from "./MovieCard";
import { useState } from "react";
// import { getMovies } from "../Services/constants";

function Movies({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleSelectMovie(event) {
    const selectedMovieId = event.target.value;
    const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);
    setSelectedMovie(selectedMovie);
  }

    return (
      <div className="movies">
        <label htmlFor="movie-select">Select a Movie</label>
        <select id="movie-select" onChange={handleSelectMovie}>
          <option value="">choose a Movie</option>
          {movies.map((movie) => {
            return (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            );
          })}
        </select>
{selectedMovie && <MovieCard selectedMovie={selectedMovie} />}

      </div>
    );
  }

export default Movies;
