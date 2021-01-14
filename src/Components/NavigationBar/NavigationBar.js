import React from "react";
import './NavigationBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import DragonCaveLogo from "./dragoncavelogobanner.png";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import Home from '../../Pages/Home'; 
import About from '../../Pages/About'; 
import Contact from '../../Pages/Contact'; 

class NavBar extends React.Component {
  render() {
    return(
      <Router>
        <Navbar bg="light" expand="xl" expanded="true">
          <div class="col-sm-2" />
          <Navbar.Brand href="/">
            <img alt="Dragon Cave Logo" src={DragonCaveLogo} width="auto" height="60" className="d-inline-block align-top" class="NavigationTitle"/>
            {'  '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route> 
          <Route exact path='/about' component={About}></Route> 
          <Route exact path='/contact' component={Contact}></Route> 
        </Switch>
      </Router>
    );
  }
}

export default NavBar;