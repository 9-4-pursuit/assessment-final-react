import { useEffect, useState } from "react"


export default function Movies() {

    let [movieList, setMovieList] = useState([])
    let [movie, setMovie] = useState('')

    useEffect(() => {
        fetch("https://resource-ghibli-api.onrender.com/films")
        .then((response) => response.json())
        .then((res) => {
            setMovieList(res)
            console.log(res)
        })
        .catch((error) => console.log(error))
    }, [])

    function handleChange(e) {
        if (e.target.value === "") {
            setMovie('')
        } else {
        let filtered =  movieList.filter((movie) => movie.title === e.target.value)
       setMovie(...filtered)
        }
    }



    return (
        <section className="movies">


            <h2>Select a Movie</h2>
            <select onChange={(e) => handleChange(e)} name="movieList" id="movieList">
            <option value=""></option>
                {movieList.map((movie) => {
                    return(
                        <>
                        <option value={movie.title} >{movie.title}</option>
                        </>
                    )
                })}
            </select>
                
            {movie ? (
                console.log(movie),
                         <aside>
                        <h2><strong>Title:</strong> {movie.title}</h2>
                        <p><strong>Release Date:</strong> {movie.release_date}</p>
                        <p><strong>Description:</strong> {movie.description}</p>
                    </aside>
                
            ) : ""}

        </section>
    )
}