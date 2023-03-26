import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMovies } from '../api/fetch';

function Movies() {

    const [selectOption, setSelectOption] = useState("");
    const [movies, setMovies] = useState([]);
    //const [allMovies, setAllMovies] = useState ([]);
    //const [searchTitle, setSearchTitle] = useState("")
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
        setSelectOption(event.target.value)
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
    </div>
  );
}

export default Movies

