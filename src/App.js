import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Navbar";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";

function App() {
  return (
    <div className='container'>
      <Router>
      <div className="header">
        <Nav />
        </div>
        <div className="main">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/people' element={<People />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
