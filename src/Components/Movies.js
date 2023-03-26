import { useEffect, useState } from "react";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/films/")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSelectChange = (event) => {
    const movieId = event.target.value;
    if (movieId === "") {
      setSelectedMovie(null);
    } else {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    setSelectedMovie(selectedMovie);
    }};


  return (
    <div className="movies">
      <h2>Select a Movie</h2>
      <select onChange={handleSelectChange} value={selectedMovie?.id || ""}>
        <option value="null">Choose a movie</option>
        <option value=""></option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie ? (
        <div>
          <h3>{selectedMovie.title}</h3>
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>{selectedMovie.description}</p>
        </div>
      ) : (
        <p>Please select a movie.</p>
      )}
    </div>
  );
}

export default Movies;