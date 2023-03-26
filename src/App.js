import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <h1>Welcome to GhibliApp</h1>
    </div>
  );
}

export default App;
