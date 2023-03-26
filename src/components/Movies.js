import React, { useEffect, useState } from "react";
import { getMovies } from "../services/constants";


function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] =useState(null);
  const [movieInfo, setMovieInfo] = useState({});

  async function dropDownOptions() {
    const answer = await getMovies();
    setMovies(answer.data);
  }

  useEffect(() => {
    dropDownOptions()
  }, [])

  useEffect(() => {
    const chosenMovie = movies.find(movie => movie.id === selectedMovie);
    setMovieInfo(chosenMovie) 
  }, [selectedMovie, movies])

  function handleSelect(event) {
    setSelectedMovie(event.target.value);
  }

  return (
    <div className="movies">
        <h2>Select a Movie</h2>
      <select onChange={handleSelect} >
        <option value=''>--</option>
        {movies.map((movie) => {
        return <option key={movie.id} value={movie.id}>{movie.title}</option>
      })}
      </select>


      {movieInfo && (
        <div className="details">
            <h3><span>Title:</span> {movieInfo.title}</h3>
            <p><span>Release Date:</span> {movieInfo.release_date}</p>
            <p><span>Description:</span> {movieInfo.description}</p>
        </div>
      )}
    </div>
  );
}

export default Movies;
