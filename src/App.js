import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getPeople, getLocation, getMovies } from "./Components/Fetch"
import { useState , useEffect } from 'react'
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {

  const [ people, setPeople ] = useState([])
  const [ movies, setMovies ] = useState([])
  const [ select, setSelect ] = useState('')
  const [ locations, setLocation ] = useState()
  const [ showLocation, setShowLocations ] = useState(false)

  useEffect(() => {
    getPeople().then((data) => {
      setPeople(data)
    })
    
    getLocation().then((data) => {
      setLocation(data)
    })

    getMovies().then((data) => {
      setMovies(data)
    })
  },[])

  function handleChange (event) {
    setSelect(movies.find((movie) => movie.id === event.target.value))
  }

  function toggleLocation() {
    setShowLocations(!showLocation)
  }

  function sortBy (sort) {
    setLocation([...locations].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <BrowserRouter>
      <Nav/>
       <div className="nav">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' 
                 element={<Movies 
                 handleChange={handleChange} 
                 movies={movies} 
                 select={select}/>} />

          <Route path='/people' 
                 element={<People 
                 people={people}/>} />

          <Route path='/locations' 
                 element={<Locations 
                 locations={locations} 
                 showLocation={showLocation} 
                 toggleLocation={toggleLocation} 
                 sortBy={sortBy}/>}/>
        </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
