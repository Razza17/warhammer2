import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

let user;
let perso;

if (window.location.search !== "") {
  let urlParams = window.location.search.substring(1).split('=');
  let recupUser = urlParams[1].split('&');
  user = recupUser[0];
  perso = urlParams[2];
}

export class Navbars extends Component {
  render() {
    console.log(user, perso);
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to={"/?pseudo="+user+"&perso="+perso} className="navbar-brand">WARHAMMER 2.0</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className={user !== undefined && perso !== undefined ? "showNav" : "hideNav"}>
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
          <Nav className={user !== undefined && perso !== undefined ? "showNav" : "hideNav"} pullRight>
            <NavItem eventKey={1} href="#">
              Mon Compte
            </NavItem>
            <NavItem eventKey={2} href="#">
              Me déconnecter
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
