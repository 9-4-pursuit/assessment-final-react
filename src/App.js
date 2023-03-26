import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllMovies, getAllPeople, getAllLocations } from './API/fetch.js'

import Nav from "./Components/Nav.js";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies([...response]);
      })
      .catch((error) => {
        console.log("Movie fetch error", error);
      })
  }, [])
  useEffect(() => {
    getAllPeople()
      .then((response) => {
        setPeople([...response]);
      })
      .catch((error) => {
        console.log("People fetch error", error);
      })
  }, [])
  useEffect(() => {
    getAllLocations()
      .then((response) => {
        setLocations([...response]);
      })
      .catch((error) => {
        console.log("Locations fetch error", error);
      })
  }, [])
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies movies={movies} />}></Route>
          <Route path="/people" element={<People people={people}/>}></Route>
          <Route path="/locations" element={<Locations locations={locations}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
