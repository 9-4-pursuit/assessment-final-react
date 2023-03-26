import { useState, useEffect } from 'react'

export default function People() {
  const [search, setSearch] = useState('')
  const [found, setFound] = useState()
  const [err, setErr] = useState()
  const [people, setPeople] = useState([])
  useEffect(() => {
    getPeople()
  }, [])
  const handleTextChange = e => {
    setSearch(e.target.value)
  }
  const getPeople = async () => {
    const res = await fetch('https://resource-ghibli-api.onrender.com/people')
    const data = await res.json()
    setPeople(data)
  }
  const submit = e => {
    e.preventDefault()
    const result = people.filter(person => person.name === search)
    if (result.length >= 1) {
      setFound(result[0])
      setErr()
    } else {
      setFound()
      setErr('Not Found')
    }
    // e.target.value=''
  }
  return (
    <div className='people'>
      <h2>Search for a Person</h2>
      <form>
        <input type='text' id='search' onChange={handleTextChange} />
        <button type='submit' onClick={submit}>
          submit
        </button>
        {found&& (
          <aside>
            <h3>Name: {found.name}</h3>
            <p>Age: {found.age}</p>
            <p>Gender: {found.gender}</p>
            <p>Hair color: {found.hair_color}</p>
          </aside>
        )}
        {
            err&&<p>{err}</p>
        }
      </form>
    </div>
  )
}