

const Film = ({film}) => {
    return (
        <div className="movie">
            <h1>Title: {film.title}</h1>
            <p><span>Release Date:</span> {film.release_date}</p>
            <p><span>Description:</span> {film.description}</p>
            <img src={film.image} alt={film.title}/>
        </div>
    )
}

export default Film;