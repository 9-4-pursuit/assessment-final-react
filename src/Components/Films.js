import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies } from "../Fetch";

const Films = () => {
    const [movies, setFilms] = useState([]);
    const [result, setResult] = useState([]);
  
    useEffect(() => {
      getAllMovies().then((films) => {
        setFilms(films);
      });
    }, []);
  
    const handleSelect = (e) => {
      const { value } = e.target;
      const selected = movies.find(({ id }) => id === value);
      if (!selected) {
        setResult("");
      } else {
        const { title, release_date, description } = selected;
        setResult(
          <div className='item'>
            <h1> Title: {title}</h1>
            <p>Release Date: {release_date}</p>
            <p>Description: {description}</p>
          </div>
        );
      }
    };
  
    return (
      <div className='movies'>
        <h1>Select A Movie</h1>
        <div>
          <select onChange={handleSelect}>
            <option value=''></option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
          </select>
          <br />
          {result}
        </div>
      </div>
    );
  };

export default Films;