import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Films from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";
import NavBar from "./Components/NavBar";

function App() {

  return (
    <div className="app">
      <Router>

        <div className="header" >
          <NavBar />
        </div>
        <br />
        <div className="wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Films />} />
              <Route path="/people" element={<People />} />
              <Route path="/locations" element={<Locations />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;