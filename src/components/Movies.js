import { useEffect, useState } from "react"
import { getMovies } from "../api/fetch"

export default function Movies() {

    const [movies, setMovies] = useState([])

    useEffect( () => {
        getMovies().then((response) => {
            setMovies(response);
          }).catch((error) => {
            console.log(error)
          })
    } , []
    )

    return (
        <div className="movies">
            <h2>Select a Movie</h2>
            <select>
                <option></option>
                {
                    movies.map( (movie) => <option key={movie.id}>{movie.title}</option>)
                }
            </select>
        </div>

        // const Answer = props => 
        // <select>
        //     {
        //     props.data.map( (x,y) => 
        //     <option key={y}>{x}</option> )
        //     }
        // </select>;
    )
    
}