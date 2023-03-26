import React, { useState, useEffect } from "react";
import { getAllMovies } from "../Fetch";

const Films = () => {
    const [films, setFilms] = useState([]);
    const [result, setResult] = useState([]);
  
    useEffect(() => {
      getAllMovies().then((films) => {
        setFilms(films);
      });
    }, []);
  
    const handleSelect = (e) => {
      const { value } = e.target;
      const selected = films.find(({ id }) => id === value);
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
            {films.map((films) => (
              <option key={films.id} value={films.id}>
                {films.title}
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