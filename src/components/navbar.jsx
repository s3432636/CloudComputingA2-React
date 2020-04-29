import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'


 
class NavigationBar extends Component {
  render() {
    return (

<Navbar variant="dark" expand="lg">
  <Navbar.Brand as={Link} to="/">Playerly</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
      <Nav.Link as={Link} to="/teamregister">Register a Team</Nav.Link>
    </Nav>
    <Form inline className="mr-auto"> 
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav>
        {/*
            TODO:
                - Profile dropdown to show when user is signed in
        */}
        <Nav.Link as={Link} to="login">Login</Nav.Link>
        <Button href="signup" variant="warning">Sign Up</Button>{' '}
        <NavDropdown title="My Profile" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/userprofile">View Profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/myteams">My Teams</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="#action/3.4">Settings</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="#action/3.4">Sign Out</NavDropdown.Item>
        </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>
 
      );
  }
}
 
export default NavigationBar;