import { useState, useEffect } from "react";
import { fetchApi } from "../../api/fetch";

function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    fetchApi("films")
      .then((response) => {
        setAllMovies(response);
      })
      .catch((error) => console.log(error));
  }, [])

  function handleSelectChange(event) {
    setSelectedMovie(event.target.value);
  }

  function showMovieDetails() {
    if (selectedMovie !== "empty") {
      const theMovie = allMovies.find((movie) => movie.id === selectedMovie);

      return(
        <>
          <h1>Title: {theMovie.title}</h1>
          <p>Release Date: {theMovie.release_date}</p>
          <p>Description: {theMovie.description}</p>
        </>
      )
    }
  }

  return (
    <div className="movies">
      <label htmlFor="select-movie">Select a Movie </label>
      <select name="select-movie" onChange={(event) => handleSelectChange(event)}>
          <option value="empty" key="empty"></option>
          {
            allMovies.map((movie) => {
              return(
                <option key={movie.id} value={movie.id}>{movie.title}</option>
              )
            })
          }
      </select>

      {selectedMovie && showMovieDetails()}
    </div>
  )
}

export default Movies