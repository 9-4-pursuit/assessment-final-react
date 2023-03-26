import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
