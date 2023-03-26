import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Common/Nav";
import Home from "./Components/Pages/Home";
import Locations from "./Components/Pages/Locations";
import Movies from "./Components/Pages/Movies";
import People from "./Components/Pages/People";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
