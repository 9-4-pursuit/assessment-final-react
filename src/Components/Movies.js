import React from 'react'
import {findMovies} from '../Services/Constants'
import { useState, useEffect } from 'react'

function Movies() {

  const [moviesArr, setMoviesArr] = useState([])
  const [dropdownOption, setdropdownOption] = useState ({})


// this function gets the information we are looking for
  async function movieSelect(){
    const answer = await findMovies()
    console.log (answer.data.title.release_date.description)
    setMoviesArr(answer.data.title.release_date.description)

  

 }

   // this function listens for the change 
   function movieSelect(event) {
    setdropdownOption(event.target.value);
  }

// This tells React that my component needs to do something AFTER render.
useEffect (()=> {
  movieSelect ()
}, [])
  


// this focuses on the elements that need to be on screen 

  return (
    <div>
      <label for = 'movies' >Select A Movie</label>
      <select 
      name = 'movies'
      id = 'movies-select'
      onChange ={movieSelect}  >

<option value=" "> </option>
        {Movies.map((movie) => (
          <option key={movie.title} value={movie.title}>
            {movie.title}
          </option>
        ))}
      </select>

      {dropdownOption.title && (
        <div>
          <h2>
            {" "}
            <span> Title: </span> {dropdownOption.title}{" "}
          </h2>
          <p>
            <span>Release Date: </span> {dropdownOption.releaseDate}
          </p>
          <p>
            <span>Description: </span> {dropdownOption.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default Movies

// TEXT : SELECT A MOVIE
//The movies page element requires a drop down selector option menu
// Once movies title is selected it needs to display the following information
// TITLE, RELEASE DATE, & DESCRIPTION
