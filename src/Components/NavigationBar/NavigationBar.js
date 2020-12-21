import React from "react";
import './NavigationBar.css';
import template from "./NavigationBar.js";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import DragonCaveLogo from "./dragoncavelogo.jpg";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 

class NavBar extends React.Component {
  render() {
    return(
      <Navbar bg="light" expand="xl" expanded="true">
        <Navbar.Brand href="#home">
          <img alt="Dragon Cave Logo" src={DragonCaveLogo} width="60" height="60" className="d-inline-block align-top" class="NavigationTitle"/>
          {' '}
          <b class="NavBarTitle">Dragon Cave</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Router>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link>
                <Link to="../../Pages/AboutPage">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Router>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
