import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="nav">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Movies' element={<Movies/>} />
          <Route path='People' element={<People/>} />
          <Route path='Locations' element={<Locations/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
