
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav"
import Home from "./Components/Home";
import People from "./Components/People";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="content">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/people" element={<People />} />
      <Route path="/locations" element={<Locations />} />
      </Routes>
      </div>
      {/* <h1>Welcome to GhibliApp</h1> */}
    </div>
  );
}

export default App;
