import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Home from "./Components/Home";
import Films from "./Components/Films";
import Locations from "./Components/Locations";
import People from "./Components/People";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="container">
    <Router>
      <div className="header">
       <NavBar />
       </div>
        <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
