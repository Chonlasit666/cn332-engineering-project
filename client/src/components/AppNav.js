//import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import LoginPop from '../pages/LoginPop';


export default function AppNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="">This is Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 d-flex align-items-start"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
        <Nav.Link href="Home">Home</Nav.Link>
        <Nav.Link href="Dashboard">Dashboard</Nav.Link>
        <Nav.Link href="MyProjecct">My Project</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown" className="d-flex me-2 justify-content-end">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='Login'>Login</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}