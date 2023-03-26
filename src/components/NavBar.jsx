import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav'>
        <Link to='/'><img className='nav-img' src='' alt='logo' /></Link>
    <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/movies'> <li>Movies</li></Link>
        <Link to='/people'><li>People</li></Link>
        <Link to='/locations'><li>Locations</li></Link>
    </ul>
    
    </nav>
  )
}
