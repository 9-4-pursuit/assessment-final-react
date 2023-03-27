import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import People from './components/People'
import Locations from './components/Locations'

const Container = () => {
    return (
        <div className="Container">
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/movies" element={<Movies />} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />} />    
        </Routes>
    
        </div>
      )
}

export default Container
