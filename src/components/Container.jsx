import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Locations from '../pages/Locations'
import People from '../pages/People'

export default function Container() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/movies' element={<Movies />}>Movies</Route>
        <Route path='/people'element={<People />}>People</Route>
        <Route path='/locations'element={<Locations />}>Location</Route>
      </Routes>
    </div>
  )
}
