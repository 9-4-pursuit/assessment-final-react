import { useEffect, useState } from "react"
import { getMovies } from "../api/fetch"
// import { getOneMovie } from "../api/fetch"
// import Movie from "./Movie"

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})
    const [movieSelected, setMovieSelected] = useState(false)

    useEffect( () => {
        getMovies().then((response) => {
            setMovies(response);
          }).catch((error) => {
            console.log(error)
          })
    } , []
    )

    function handleSelect(event) {
        const selectedMovie = movies.filter( (movie) => movie.id === event.target.value )
        if (Object.keys(selectedMovie).length !== 0) {
            setMovie(selectedMovie[0])
            setMovieSelected(true)
        } else {
            setMovieSelected(false)
        }
    }

    return (
        <div className="movies">
            <h2>Select a Movie</h2>
            <select onChange={(event) => handleSelect(event)} >
                <option></option>
                {
                    movies.map( (movie) => <option key={movie.id} value={movie.id} >{movie.title}</option>)
                }
            </select>
            
                {
                    movieSelected ? (
                        <aside>
                            <h2>Title: {movie.title}</h2>
                            <p>Release Date: {movie.release_date}</p>
                            <p>Description: {movie.description}</p>
                        </aside>
                    ) : null
                    
                }
            
        </div>
    )   
}