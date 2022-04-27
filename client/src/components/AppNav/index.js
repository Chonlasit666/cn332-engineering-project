import React, { useContext, useCallback, } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import { logout } from '../../pages/Home/sdk';
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";
import {
  LOGIN_URL,
  HOME_URL,
  Createproject_URL,
  Dashboard_URL,
  Project_URL,
  GoogleCalendar_URL,
  Profile_URL,
  Documents_URL,
} from "./urls";
import { useUserRequired } from '../../utils/hooks';

const AppNav = () => {
  useUserRequired();

  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = useCallback(() => {
    logout().then(() => {
      setUser(null);
      history.push(LOGIN_URL);
    });
  }, [setUser, history]);

  console.log("!user")
  console.log(!user)

  console.log("user")
  console.log(user)

  return (<Navbar bg="light" expand="lg">
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
        <Nav.Link href={HOME_URL}>Home</Nav.Link>
        <Nav.Link href={Dashboard_URL}>Dashboard</Nav.Link>
        <Nav.Link href={Documents_URL}>Project Documents</Nav.Link>
        <Nav.Link href={GoogleCalendar_URL}>Calen</Nav.Link>
        <Nav.Link href={Profile_URL}>Project</Nav.Link>
        <Nav.Link href={Createproject_URL}>Create Project</Nav.Link>
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
          
        </NavDropdown>
        <div>
            {!user
              ? <NavDropdown.Item href={LOGIN_URL}>Login</NavDropdown.Item>
              : <NavDropdown.Item onClick={handleLogout}>logout</NavDropdown.Item>}
          </div>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}



export default AppNav;