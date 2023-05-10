import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import Logout from './logout';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/Profile" className="nav-link">Profile</Link>
            {/* <Nav.Link href="#home">Profile</Nav.Link> */}
            <Link to="/misc" className="nav-link">misc</Link>
            <Link to="/miscc" className="nav-link">misc</Link>
            <Logout />
          </Nav>
        </Container>
      </Navbar>
   
  );
}


export default NavBar;