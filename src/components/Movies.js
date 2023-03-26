import { movies } from "../services/constants";
import { useState, useEffect } from "react";

function Movies() {
    const [movieArr, setMovieArr] = useState([]);
    const [movie, setMovie] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [movieRelease, setMovieRelease] = useState('');
    const [movieDescript, setMovieDescript] = useState('');
    const [movieInfo, setMovieInfo] = useState('none')

    
    
    
    async function handleChange() {
        const choosenMovie = await movies();
        console.log(choosenMovie, 'this is my api');
        setMovieArr(choosenMovie);
        // console.log(event.target.value)
        let movieName = document.querySelector('select').value
        console.log(movieName)
        choosenMovie.find((movie) => {
            if(movie.title === movieName) {
                setMovieInfo('block')
                setMovieTitle(movie.title)
                setMovieRelease(movie.release_date)
                setMovieDescript(movie.description)
            } else if(movieName === '') {
                setMovieInfo('block')
                setMovieDescript('')
                setMovieTitle('')
                setMovieRelease('')

            }
        })
        // setMovie(choosenMovie.map((movie) => <option id={movie.id}>{movie.title}</option>))
    }

useEffect(() => {
    handleChange()
}, [])

    return (
        <div className="movies">
            <form>
                <label htmlFor="">Select a Movie</label><br />
                <select onChange={handleChange} >
                    <option></option>
                    {
                        movieArr.map((movie) => <option id={movie.id}>{movie.title}</option>)
                    }
                </select>
                
            </form>
            <div className='movieInfo' style={{'display': movieInfo}}>
            <h3><span>Title: </span>{movieTitle}</h3>
            <p><span>Release Date: </span>{movieRelease}</p>
            <p><span>description: </span>{movieDescript}</p>
            </div>
        </div>
    )
}

export default Movies