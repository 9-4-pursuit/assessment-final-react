import { useState, useEffect } from "react"
import {getMovies} from "./Fetch"

export default function Movies() {

    const [ movies, setMovies] = useState([]);
    const [ select, setSelect] = useState([]);

   useEffect(()=> {
    getMovies().then((response)=>{
        setMovies(response)
    }).catch((e) =>{
        console.log(e)
    })
   })

   function handleChange(event) {
    event.preventDefault()

    movies.map((movie)=>{
        if (movie.title === event.target.value){
            setSelect({
                title: movie.title,
                releaseDate: movie.release_date,
                description: movie.description,
            })
        }else if (event.target.value.length === 0){
            setSelect({})
        }
        
    })
   }



    return (
    <div className="movies">
        <h1>Select a Movie</h1>
        <br></br>
        <select name="movies" id="movie-select" onChange={handleChange}>
            <option value=""></option>

            {movies.map((movie)=>
            (<option key={movie.title} value={movie.title}> {movie.title} </option>))}
            
        </select>
        <br></br>
        {select.title && (
            <>
            <h2> 
            <br></br>
            <span>Title:</span> {select.title}
            </h2>
            <p>
            <span> Release Date:</span> {select.releaseDate}
            </p>
            <p>
            <span> Description: </span> {select.description}
            </p>
            </>
        )}
    </div>

  )
}