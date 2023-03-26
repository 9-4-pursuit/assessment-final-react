import { useState, useEffect } from "react";

import NavBar from "./Components/NavBar";
import Locations from "./Components/Locations";
import Movies from "./Components/Movies";
import People from "./Components/People";

import { Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  //to populate the movies array and send it to movies component
  useEffect(() => {
    fetch("https://resource-ghibli-api.onrender.com/films")
      .then((res) => res.json())
      .then((movies) => setMovies(movies));
  }, []);


  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/"/>
        <Route path="/movies" element={<Movies movies={movies}/>} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
