import React from "react";

import logo from "../../assets/logo/logo.png";
import './Header.css'
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="bg-white shadow-lg" fixed="top" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" width="120" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="">
          <Nav.Link href="#home">Overview</Nav.Link>
          <Nav.Link href="#link">Features</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
