import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Movies from "./Components/Movies";
import NavBar from "./Components/NavBar";
import People from "./Components/People";

import Home from "./Components/Home";
import Locations from "./Components/Locations";



function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/people" element={ <People /> } />
          <Route path="/locations" element={ <Locations /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
