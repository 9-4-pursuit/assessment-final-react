import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/home/Home";
import People from "./components/peoplePage/People";
import Locations from "./components/locationsPage/Locations";
import Movies from "./components/moviesPage/Movies";
import { useState, useEffect } from "react";
import { getAllMovies } from "./api/fetch";
import { getAllPeople } from "./api/fetch";
import { getAllLocations } from "./api/fetch";





function App() {

  const [movies, setMovie] = useState([])
  const [people, setPeople] = useState([])
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getAllMovies().then((response) => {
        console.log(response)
        setMovie(response)
    })
    getAllPeople().then((response) => {
      console.log(response)
      setPeople(response)
    })
    getAllLocations().then((response) => {
      console.log(response)
      setLocations(response)
    })
}, [])




  return (
    <div className="app">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies movies={movies} />}/>
        <Route path="/people" element={<People people={people} />}/>
        <Route path="/locations" element={<Locations locations={locations} />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
