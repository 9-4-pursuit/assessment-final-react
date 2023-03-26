
function Movies( { movies, select, handleChange }) {

    return (
        <main className="movies">
            <h2>Select a Movie</h2>
            <section>
                <select onChange={handleChange}>
                    <option value=''>Please select an option</option>
                    {movies ? movies.map((movie, index) => {
                        return (
                            <option key={index} value={movie.id}>{movie.title}</option>
                        )
                    }) : null }
                </select>
            </section>
            {select? 
            <aside>
                <h2><strong>Title: </strong>{select.title}</h2>
                <p><strong>Release Date: </strong>{select.release_date}</p>
                <p><strong>Description: </strong>{select.description}</p>
            </aside>
             : null }
        </main>
    )
}

export default Movies