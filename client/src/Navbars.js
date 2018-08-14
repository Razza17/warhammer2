import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import firebase from 'firebase/app';
import 'firebase/auth';

let user;
let perso;

if (window.location.pathname === "/personnage" || window.location.pathname === "/equipement" || window.location.pathname === "/combat" || window.location.pathname === "/moncompte") {
  let urlParams = window.location.search.substring(1).split('=');
  let recupUser = urlParams[1].split('&');
  user = recupUser[0];
  perso = urlParams[2];
}

export class Navbars extends Component {

  logout() {
    let config = {
      apiKey: "AIzaSyCXSmiyYCqx8LWXeC16RoBFo-j0Kvlnx-Q",
      authDomain: "warhammer-81ced.firebaseapp.com",
      databaseURL: "https://warhammer-81ced.firebaseio.com",
      projectId: "warhammer-81ced",
      storageBucket: "warhammer-81ced.appspot.com",
      messagingSenderId: "1046515260577"
    };
    firebase.initializeApp(config);
    
    firebase.auth().signOut().then(function() {
      window.location.assign("/")
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to={"/?pseudo="+user+"&perso="+perso} className="navbar-brand">WARHAMMER 2.0</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className={user !== undefined && perso !== undefined ? "show" : "hide"}>
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
          <Nav className={user !== undefined && perso !== undefined ? "show" : "hide"} pullRight>
            <NavItem eventKey={3} href="#">
              Mon Compte
            </NavItem>
            <NavItem eventKey={4} onClick={this.logout.bind(this)}>
              Me déconnecter
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
