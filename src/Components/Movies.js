import { gettingMoviess } from "../Fetch"
import { useState, useEffect } from "react"

export default function Movies() {
    const [moviesArr, setMoviesArr] = useState([])
    const [id, setId] = useState("")
    const [dummyArr, setDummyArr] = useState([])

    async function settingMovies() {
        const newArr = await gettingMoviess()
        setMoviesArr(newArr)
        // console.log(id)
    }

    function singleMovie() {
        const newArr2 = moviesArr.filter((x) => x.title === id)
        setDummyArr(newArr2)
        console.log(newArr2)
    }

    useEffect(() => {
        settingMovies()
    }, [])

    useEffect(() => {
        singleMovie()
    }, [id])

    return (
        <div className="movies">
            <section>
                <h2>Select a Movie</h2>
                <select onChange={(e) => setId(e.target.value)}>
                    <option value=""></option>
                    {
                        moviesArr.map((movie) => {
                            console.log(movie)
                            return (
                                <option value={movie.title}>{movie.title}</option>
                            )
                        })
                    }
                </select>
                <aside style={id === "" ? { display: "none" } : { display: "block" }}>
                    {
                        dummyArr.map((x) => {
                            return (
                                <div>
                                    <h2><span>Title: </span>{x.title}</h2>
                                    <p><span>Release Date: </span>{x.release_date}</p>
                                    <p><span>Description: </span>{x.description}</p>
                                </div>
                            )
                        })
                    }
                </aside>
            </section>
        </div>
    )
}