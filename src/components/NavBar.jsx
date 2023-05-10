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
          <Navbar.Brand href="#home">ShareCal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Profile</Nav.Link>
            {/* <Nav.Link href="#home">Profile</Nav.Link> */}
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Logout />
          </Nav>
        </Container>
      </Navbar>
   
  );
}


export default NavBar;