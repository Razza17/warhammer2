import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { fakeAuth } from "./components/home/Login";

let urlParams = window.location.search.substring(1).split('=');
let recupUser = urlParams[1].split('&');
let user = recupUser[0];
let perso = urlParams[2];

export class Navbars extends Component {
  render() {
    const authed = fakeAuth.isAuthenticated;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to={"/?pseudo="+user+"&perso="+perso} className="navbar-brand">WARHAMMER 2.0</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
        <Navbar.Collapse>
          <NavclassName={authed === true ? "showNav" : "hideNav"}>
            <LinkContainer to={"/personnage?pseudo="+user+"&perso="+perso}>
              <NavItem eventKey={0}>Personnage</NavItem>
            </LinkContainer>
            <LinkContainer to={"/equipement?pseudo="+user+"&perso="+perso}>
              <NavItem eventKey={1}>Equipement</NavItem>
            </LinkContainer>
            <LinkContainer to={"/combat?pseudo="+user+"&perso="+perso}>
              <NavItem eventKey={2}>Combat</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
