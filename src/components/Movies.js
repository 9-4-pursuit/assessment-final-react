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
  
    fetch(`https://resource-ghibli-api.onrender.com/films/${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMovie({
          ...selected,
          banner: data.image,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="movies">
      <h2>Movie List</h2>
      <label className="movie-select" htmlFor="movie-select">Select a movie:</label>
      <br></br>
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
          {selectedMovie.banner && (
            <Card.Img variant="top" src={selectedMovie.banner} alt={selectedMovie.title} />
          )}
          <Card.Body>
            <Card.Title><span>{selectedMovie.title}</span></Card.Title>
            <Card.Title>{selectedMovie.original_title}</Card.Title>
            <Card.Title>{selectedMovie.original_title_romanised}</Card.Title>
            <Card.Text className="description">{selectedMovie.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Movies;
