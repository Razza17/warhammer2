import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { fakeAuth } from "./components/home/Login";

export class Navbars extends Component {
  render() {
    const authed = fakeAuth.isAuthenticated;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/" className="navbar-brand">WARHAMMER 2.0</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className={authed === true ? "showNav" : "hideNav"}>
            <LinkContainer to="/personnage">
              <NavItem eventKey={0}>Personnage</NavItem>
            </LinkContainer>
            <LinkContainer to="/equipement">
              <NavItem eventKey={1}>Equipement</NavItem>
            </LinkContainer>
            <LinkContainer to="/combat">
              <NavItem eventKey={2}>Combat</NavItem>
            </LinkContainer>
            <LinkContainer to="/update">
              <NavItem eventKey={3}>Update your Character</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
