
import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav>
    <ul>
      
    <NavLink to= '/'>
      <img src = 'https://www.pngegg.com/en/png-mexsx' alt = "ghibliapp logo"/>
      </NavLink>
       <NavLink to = '/movies'><li>Movies</li> </NavLink>.
        <NavLink to= '/people'><li>People</li></NavLink> 
        <NavLink to= '/location'>  <li>Location</li></NavLink>
        
      
    </ul>
    

      <section>
        <h2>Welcome to GhibliApp</h2>
        </section>
     
        </nav>
  )
}

export default Nav

// This is where you will set up your entire NavBar
// Must import {NavLink}from 'react-router-dom';
// Must wrap <NavLink></NavLink> around each <li>Name of 
// It is looking for a image (src) to display in Navbar
// DONT FORGET TO WRAP IT IN A <nav> tag
// Must set up in following Order: Movies, People, Location
// Set image in NavBar