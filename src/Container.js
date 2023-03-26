import React from 'react'
//import { findMovies, findPeople } from './Services/Constants'
import People from './Components/People'
import Movies from './Components/Movies'
import Locations from './Components/Locations'
import {Routes,Route} from 'react-router-dom'

function Container() {
  return (
    
    <div>
        <Routes>

        <Route path= "/"  />
        <Route path= "/movies"  element = {<Movies/>} />
        <Route path= "/people"  element = {<People/>} />
        <Route path= "/location" element = {<Locations/>} />
        
        </Routes>
        
        </div>
  )
}

export default Container



// This is where we are going to set up all our routes:
// HERE ARE THE STEPS: 
// 1st. All the pages that are to be "routed to" MUST be imported
// 2nd. Dont forget to import {Route, Routes} from react this will "aid in activation"
// Set up paths and elements, note the text displayed in path "/" is what will showcase in URL
// The element its assigned to is what will render on the screen 
// Inside of the function return INSIDE of <div> tag container call <Routes> </Routes> (plural)
// 4th Route will determine EACH PATH

