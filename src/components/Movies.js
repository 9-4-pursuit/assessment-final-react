import { useEffect, useState } from 'react'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [selection, setSelection] = useState({})
  useEffect(() => {
    getMovies()
  }, [])
  const getMovies = async () => {
    const res = await fetch('https://resource-ghibli-api.onrender.com/films')
    const data = await res.json()
    setMovies(data)
  }
  const handleSelect = e => {
    const selected = movies.filter(movie => movie.title === e.target.value)[0]
    setSelection(selected)
  }
  return (
    <div className='movies'>
      <h2>Select a Movie</h2>
      <select onChange={handleSelect}>
        <option> </option>
        {movies.map(movie => (
          <option key={movie.id} value={movie.title}>
            {movie.title}
          </option>
        ))}
      </select>
      {console.log(selection)}
      {selection && (
        <aside>
          <h2>
            <em>Title:</em> {selection.title}
          </h2>
          <p>Release Date: {selection.release_date}</p>
          <p><em>Description: </em>{selection.description}</p>
        </aside>
      )}
    </div>
  )
}
