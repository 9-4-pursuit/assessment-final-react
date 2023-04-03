import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import People from "./components/pages/People";
import Locations from "./components/pages/Locations";
import ErrorMessage from "./components/error/ErrorMessage";

function Container() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/people" element={<People />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/*" element={<ErrorMessage />} />
    </Routes>
  );
}

export default Container;
