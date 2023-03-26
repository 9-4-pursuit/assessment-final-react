
import { useState } from "react"




export default function Movies({ movies }) {

    const [movie, setMovie] = useState([])

    

  
    function handleChange(event) {
      console.log(event.target.value)
      
      if (event.target.value !== ""){
      movies.map((element) => {
        if (event.target.value === element.title){
            setMovie(element)
        } 
      })
    } else if (event.target.value === "" ){
        setMovie([])
    }
    }

    if (movie.length === 0){
    return (
        <div className="movies">
                <h2>Select a Movie <br></br>
                <select onChange={handleChange} style={{"width": "15%", "justifyContent": "center"}}>
                    <option></option>
                    {movies.map((e) => {
                    return(
                    <option key={e.id}>{e.title}</option>
                    )
                    })}
                </select>
                </h2>
                </div>
                )} else {
        return (
            <div className="movies">
            <h2>Select a Movie <br></br>
            <select onChange={handleChange} style={{"width": "15%", "justifyContent": "center"}}>
                <option></option>
                {movies.map((e) => {
                return(
                <option key={e.id}>{e.title}</option>
                )
                })}
            </select>
            </h2>
            <aside>
                <h2>Title: <span style={{"fontWeight": "normal"}}>{movie.title}</span> </h2>
                <h4 style={{"textAlign": "center"}}>Release Date: <span style={{"fontWeight": "normal"}}>{movie.release_date}</span></h4>
                <p>{movie.description}</p>
            </aside>
        </div>
)}}

/* {movies.map((movie) => {
    return (
        <div>
        <option>{movie.title}</option>
        </div>
    )
})} */