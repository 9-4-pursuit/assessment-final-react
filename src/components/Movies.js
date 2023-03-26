import React, { useState, useEffect } from "react";

const Movies = () => {
    
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/films")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleSelectMovie = (event) => {
    const movieId = event.target.value;
    const selected = movies.find((movie) => movie.id === movieId);
    setSelectedMovie(selected);
  };

  return (
    <div className="movies">
      <h2>Movie List</h2>
      <label htmlFor="movie-select">Select a movie:</label>
      <select id="movie-select" onChange={handleSelectMovie}>
        <option value="">Choose a movie...</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <div className="selected-movie">
          <h3>{selectedMovie.title}</h3>
          <p>{selectedMovie.description}</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
