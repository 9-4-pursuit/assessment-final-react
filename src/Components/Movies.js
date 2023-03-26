import { useEffect, useState } from "react";
import { getFilms } from "../Constants";

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  useEffect(() => {
    getFilms()
      .then((data) => {
        setFilms(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function movieSelectHandler(event) {
    setSelectedMovie(films.find((movie) => movie.id === event.target.value));
  }
  return (
    <div className="movies">
      <h1>Select a Movie</h1>
      <select onChange={movieSelectHandler}>
        <option value="">Please select an option</option>
        {films
          ? films.map((film, index) => {
              return (
                <option key={index} value={film.id}>
                  {" "}
                  {film.title}
                </option>
              );
            })
          : null}
      </select>
      <div>
        {selectedMovie ? (
          <>
            <h1>
              <b>Title: </b>
              {selectedMovie.title}
            </h1>
            <h6>
              <b>Release Date: </b>
              {selectedMovie.release_date}
            </h6>
            <p>
              <b>Description:{selectedMovie.description}</b>
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
