import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navs.css'
import logo from './../../images/logo.png'
export default function Navs() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="imgg" href="#home">
            <img  src={logo} alt="" title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#ingredients">About</Nav.Link>
            <Nav.Link href="#blogs">Explore Food</Nav.Link>
            <Nav.Link href="#slider">Review</Nav.Link>
          </Nav>
          <Nav>
      <Nav.Link id="lastnav">
        07507932888
      </Nav.Link>
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
