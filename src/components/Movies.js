import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

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
      <label htmlFor="movie-select">Select a movie:</label><br></br>
      <select id="movie-select" onChange={handleSelectMovie}>
        <option value="">Choose a movie...</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovie && (
        <Card className="selected-movie mt-4">
          <Card.Body>
            <Card.Title>{selectedMovie.title}</Card.Title>
            <Card.Text>{selectedMovie.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Movies;
