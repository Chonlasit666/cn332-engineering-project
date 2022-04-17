import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";


const AppNav = () => (
  <Navbar bg="light" expand="lg">
    <Container className='justify-content-md-center'>
      <Navbar.Brand >
        <img
          src="https://engr.tu.ac.th/uploads/engr/Identity/LOGO/Main%20Logo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="Home">Home</Nav.Link>
        <Nav.Link href="Dashboard">Dashboard</Nav.Link>
        <Nav.Link href="Project">Project</Nav.Link>
        <Nav.Link href="Createproject">Create Project</Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Search</Button>
        </Form>
        <NavDropdown title="Link" id="navbarScrollingDropdown" className="d-flex me-2 justify-content-end auto">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='Login'>Login</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default AppNav;