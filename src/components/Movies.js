import { useEffect, useState } from "react";
import { getMovies } from "../api/fetch";

export default function Movies() {
  const [ getMovie, setMovie ] = useState([]);
  const [ selectMovie, setSelect ] = useState("");

    useEffect(() => {
      getMovies()
      .then((movie) => {
        setMovie(movie);
        console.log(movie)
      })
      .catch((error) => {
        console.log(error);
      });
    }, [])

    function handleSelect(e) {
      const film = getMovie.find(
        (movie) => movie.id === e.target.value);
        setSelect(film);
        console.log(selectMovie)
    }


    return (
      <div className="movies">
        <section>
          <h2>Select a Movie</h2>
          <select name="movies" id="movies" onChange={handleSelect}>
            <option value="">Select a Movie</option>
          {getMovie 
          ? getMovie.map((movie) => {
            return (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            );
          }) : null }
          </select>
          </section>

          {selectMovie ? (
            <aside>
              <h2>{""}<span>Title:</span> {selectMovie.title}{""}</h2>
              <p>{""}<span>Release Date:</span>{selectMovie.release_date}{""}</p>
              <p>{""}<span>Description:</span>{selectMovie.description}{""}</p>
            </aside>
          ) : null}
          </div>
    );
  }
  