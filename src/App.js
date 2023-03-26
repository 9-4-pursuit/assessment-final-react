import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import People from "./components/People";

import Home from "./pages/Home";
import Locations from "./pages/Locations";
import MoviesPage from "./pages/MoviesPage";
import PeoplePage from "./pages/PeoplePage";


function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={ <MoviesPage /> } />
          <Route path="/people" element={ <PeoplePage /> } />
          <Route path="/locations" element={ <Locations /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
