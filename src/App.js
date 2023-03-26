import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Locations from "./components/Locations";
import Nav from "./components/Nav";
import People from "./components/People";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="app">
      <Nav/>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
