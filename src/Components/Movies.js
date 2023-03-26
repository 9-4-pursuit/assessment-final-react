import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMovies } from '../api/fetch';

function Movies() {

    const [selectOption, setSelectOption] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const [loadingError, setLoadingError] = useState(false);


    useEffect(() => {
        getAllMovies()
          .then((response) => {
            setMovies(response);
            setLoadingError(false);
          })
          .catch((error) => {
            console.error(error);
            setLoadingError(true);
          });
      }, []);

    function handleSelectOption(event){
        const movieID = (event.target.value)
        const selected = movies.find((movie) => movie.id.toString() === movieID);
        setSelectedMovie(selected);
    }


  return (
    <div className='movies'>
        <h1>Select a Movie</h1>
        <form className='movies-form'>
        <select id="movies" onChange={handleSelectOption}>
            <option value=""></option>
            {movies.map((movie) => (
                <option value={ movie.id} key={ movie.id }>
                    {movie.title}
                </option>
            ))}
        </select>
     </form>
     {selectedMovie && (

            <div>
                <h2><span style={{fontWeight: 'bold'}}>Title:</span> {selectedMovie.title} </h2>
                <p><span style={{fontWeight: 'bold'}}>Release Date:</span> {selectedMovie.release_date}</p>
                <p><span style={{fontWeight: 'bold'}}>Description:</span> {selectedMovie.description}</p>
            </div>

     )}
    </div>
  );
}

export default Movies

