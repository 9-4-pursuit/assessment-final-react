
import { useState, useEffect } from "react";
import { getMovies } from "../../fetch/fetch";
import Movie from "./Movie";

export default function Movies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [isMovieSelected, setIsMovieSelected] = useState(false);

  //get all the movies and set it to state
  //for populating the select box on first render
  useEffect(() => {
    getMovies()
    .then((res) => {
      setAllMovies([...res]);
    })
  }, []);

  //function for displaying a movie when an option is selected
  function onMovieSelection(event) {
    let movieIndex = event.target.value;

   if(movieIndex > -1) {
    setMovie(allMovies[movieIndex]);
    setIsMovieSelected(true);
   } else {
    setMovie({});
    setIsMovieSelected(false);
   }
  }


  return (<div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={onMovieSelection}>
        <option value={-1}></option>
        {allMovies.map((movie, index) => {
          return (<option value={index} key={movie.id}>{movie.title}</option>)
        })}
      </select>

    {isMovieSelected ? <aside>
      <Movie movie={movie}/>
    </aside> 
    : null}

  </div>);
};