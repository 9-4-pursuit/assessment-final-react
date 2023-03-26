
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import Movies from "./components/movies/Movies"
import People from "./components/people/People"
import Locations from "./components/locations/Locations"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/locations" element={<Locations/>} />
      </Routes>
      </main>
      
      
    </div>
  );
}

export default App;
