import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <header className="Header">
  <Navbar expand="md">
    <Navbar.Brand href="/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34I-KzB93kJqaminUd71MTmRT59A88YI0oehvUv1Fpg&s" alt="Totoro Logo" width="100" height="100" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link exact as={NavLink} to="/" activeClassName="active">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/movies" activeClassName="active">
          Movies
        </Nav.Link>
        <Nav.Link as={NavLink} to="/people" activeClassName="active">
          People
        </Nav.Link>
        <Nav.Link as={NavLink} to="/locations" activeClassName="active">
          Locations
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header>

  );
};

export default Header;
