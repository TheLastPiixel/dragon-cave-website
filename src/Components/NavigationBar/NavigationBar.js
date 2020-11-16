import React    from "react";
import template from "./NavigationBar.js";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import DragonCaveLogo from "./dragoncavelogo.jpg";

class NavBar extends React.Component {
  render() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img alt="Dragon Cave Logo" src={DragonCaveLogo} width="30" height="30" className="d-inline-block align-top"/>
          {' '}
          <b>Dragon Cave</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
