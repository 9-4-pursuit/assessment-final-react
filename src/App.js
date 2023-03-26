import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/NavBar"
import Home from './Components/Home'
import People from './Components/People'
import Movies from './Components/Movies'
import Locations from './Components/Locations'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/people' element={<People />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </div>
  )
}

export default App