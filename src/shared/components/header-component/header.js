import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Meet Up</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact={true}
            to="/"
            activeClassName="is-active"
            className="nav-link"
          >
            Register
          </NavLink>
          <NavLink
            exact={true}
            to="/list"
            activeClassName="is-active"
            className="nav-link"
          >
            Users
          </NavLink>
          <NavLink
            exact={true}
            to="/report"
            activeClassName="is-active"
            className="nav-link"
          >
            Report
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;
