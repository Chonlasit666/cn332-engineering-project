import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Myproject from '../pages/MyProjecct';
import Createproject from '../pages/Createproject';
import Projectdetail from '../pages/Projectdetail';
import Profile from '../pages/Profile';
import Login from '../services/googleLogin';


/* export default function AppNav() {
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
} */



export default class AppNav extends Component {
  render() {
    console.log('hello');
    return (
      <Router>
        <div>
          <Navbar bg="warning" variant='light'>
            <Container Navbar>
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
                <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/Dashboard"}>Dashboard</Nav.Link>
                <Nav.Link as={Link} to={"/Myproject"}>My Project</Nav.Link>

              </Nav>


              <Navbar.Collapse className="justify-content-end">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-secondary">Search</Button>
                </Form>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/Profile"}>Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={""}>Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/Login"}>Login</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Myproject" element={<Myproject />} />
            <Route path="/Createproject" element={<Createproject />} />
            <Route path="/Projectdetail" element={<Projectdetail />} />
           
          </Routes>
        </div>
      </Router>
    )
  }
}
