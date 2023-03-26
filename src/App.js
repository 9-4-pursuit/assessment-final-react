import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import People from './components/People'
import Movies from './components/Movies'
import Locations from './components/Locations'

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
