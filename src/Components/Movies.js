




function Movies({movies}) {
  return (
    <div>
      <h2>Select a Movie</h2>
      <select>
        {movies.map((movie) => {

          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );      
        })    
        }


      </select>
    </div>
  )
}

export default Movies
