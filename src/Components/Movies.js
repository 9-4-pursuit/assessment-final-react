import { useEffect, useState } from 'react';
import { getAllMovies } from '../API/fetch.js'

export default function Movies({movies}) {
    const [selectedIndex, setSelectedIndex] = useState("");
    function handleSelect(event){
        setSelectedIndex (event.target.value);
    }
    function movieCard(){
        if (!selectedIndex) {
            return (
                <div></div>
            )
        } else {
            return (
                <aside>
                    <h2>Title: {movies[selectedIndex].title}</h2>
                    <p>Release Date: {movies[selectedIndex].release_date}</p>
                    <p>Description: {movies[selectedIndex].description}</p>
                </aside>
            )
        }
    }
    return (
        <div className="movies">
            <h2>Select a Movie</h2>
            <select name="selectMovie" id="selectMovie" onChange={handleSelect}>
                <option key={''} value=''></option>
                {movies.map((movie, index) => {
                    return (
                        <option key={movie.title} value={index}>{movie.title}</option>
                    )
                })}
            </select>
            {movieCard()}
        </div>
    )
}