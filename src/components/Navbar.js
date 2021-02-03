import '../App.css';
import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import devLogo from '../assets/logo.png';
import homeLogo from '../assets/home.png';
import aboutLogo from '../assets/aboutLogo.png';
import skillsLogo from '../assets/skills.png';
import experienceLogo from '../assets/experience.png';

class Nav_bar extends React.Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
      <img src={devLogo} className="devLogo"/>  
        Mustafa Ilahi &nbsp; &nbsp;</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">
          <img src={homeLogo} className="homeLogo"/>&nbsp; Home &nbsp;</Nav.Link>
          <Nav.Link href="#pricing">
          <img src={aboutLogo} className="aboutLogo"/>&nbsp; About &nbsp;</Nav.Link>
          <Nav.Link href="#pricing">
          <img src={skillsLogo} className="skillsLogo"/>&nbsp; Skills &nbsp;</Nav.Link>
          <Nav.Link href="#pricing">
          <img src={experienceLogo} className="experienceLogo"/>&nbsp; Experience</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Nav_bar;
