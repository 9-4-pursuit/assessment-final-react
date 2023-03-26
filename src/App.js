import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Locations from './Components/Locations';
import People from './Components/People';
import Movies from './Components/Movies';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/locations" element= { <Locations /> } />
        <Route path ="/movies" element ={ <Movies /> } />
        <Route path ="/people" element = { <People /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
