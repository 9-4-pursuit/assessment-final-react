import { useState, useEffect } from "react";

export default function Movies() {

    let filmsUrl = `https://resource-ghibli-api.onrender.com/films`;

    const [showFilm, setShowFilm] = useState(<> </>);

    const [films, setFilms] = useState([]);

    const [title, setTitle] = useState("");

    const [releaseDate, setReleaseDate] = useState("");

    const [description, setDescription] = useState("");

    useEffect(() => {

        fetch(filmsUrl)
        .then((response) => response.json())
        .then((data) => {

        setFilms(data);

    }).catch((error) => {
        console.log(error);
    })
    }, [])

    function display(event) {

        films.map((film) => {
            if (film.title === event.target.value) {

                setTitle(event.target.value)

                setReleaseDate(film.release_date)

                setDescription(film.description)

                // setShowFilm(
                //     <>
                //     <h2> {title} </h2>
                //     <p> {releaseDate} </p>
                //     <p> {description} </p>
                //     </>
                // )
            }
        })
    }

    return (
        <div className="movies">
            <h2> Select a Movie </h2>
            <select onChange={(event) => display(event)}>
                <option value='empty'> </option>
                {
                    films.map((film, i) => <option key={Math.random()}> {film.title} </option>)
                }
            </select>
            <section>
                <br />
                {/* {showFilm} */}
                <h2> {title} </h2>
                <p> {releaseDate} </p>
                <p> {description} </p>
            </section>
        </div>
    )
}