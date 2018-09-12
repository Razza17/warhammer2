import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// import firebase from 'firebase/app';
// import 'firebase/auth';

export class FullNavbars extends Component {

  constructor(props) {
    super(props);

    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];
    let pathname = window.location.pathname;
    let personnage = false;
    let equipement = false;
    let combat = false;
    let monCompte = false;

    if(pathname === "/personnage") {
      personnage = true;
    } else if (pathname === "/equipement") {
      equipement = true;
    } else if (pathname === "/combat") {
      combat = true;
    } else if (pathname === "/monCompte") {
      monCompte = true
    }

    this.state = {
      user: user,
      perso: perso,
      personnage: personnage,
      equipement: equipement,
      combat: combat,
      monCompte: monCompte
    }
    console.log(personnage);
  }

  active(onglet) {
    if(onglet === "personnage") {
      this.setState({
        personnage: true,
        equipement: false,
        combat: false,
        monCompte: false
      })
    } else if (onglet === "equipement") {
      this.setState({
        personnage: false,
        equipement: true,
        combat: false,
        monCompte: false
      })
    } else if (onglet === "combat") {
      this.setState({
        personnage: false,
        equipement: false,
        combat: true,
        monCompte: false
      })
    } else if (onglet === "monCompte") {
      this.setState({
        personnage: false,
        equipement: false,
        combat: false,
        monCompte: true
      })
    }
  }

  logout() {
    // let config = {
    //   apiKey: "AIzaSyCXSmiyYCqx8LWXeC16RoBFo-j0Kvlnx-Q",
    //   authDomain: "warhammer-81ced.firebaseapp.com",
    //   databaseURL: "https://warhammer-81ced.firebaseio.com",
    //   projectId: "warhammer-81ced",
    //   storageBucket: "warhammer-81ced.appspot.com",
    //   messagingSenderId: "1046515260577"
    // };
    // firebase.initializeApp(config);
    //
    // firebase.auth().signOut().then(function() {
    //   window.location.assign("/")
    // }).catch(function(error) {
    //   // An error happened.
    // });

    window.location.assign("/")
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <div className="navbar-brand">WARHAMMER 2.0</div>
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={"/personnage?pseudo="+this.state.user+"&perso="+this.state.perso}>
              <NavItem onClick={this.active.bind(this, "personnage")} className={this.state.personnage ? "active" : "noActive"} eventKey={0}>Personnage</NavItem>
            </LinkContainer>
            <LinkContainer to={"/equipement?pseudo="+this.state.user+"&perso="+this.state.perso}>
              <NavItem onClick={this.active.bind(this, "equipement")} className={this.state.equipement ? "active" : "noActive"} eventKey={1}>Equipement</NavItem>
            </LinkContainer>
            <LinkContainer to={"/combat?pseudo="+this.state.user+"&perso="+this.state.perso}>
              <NavItem onClick={this.active.bind(this, "combat")} className={this.state.combat ? "active" : "noActive"} eventKey={2}>Combat</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={"/monCompte?pseudo="+this.state.user+"&perso="+this.state.perso}>
              <NavItem onClick={this.active.bind(this, "monCompte")} className={this.state.monCompte ? "active" : "noActive"} eventKey={3}>Mon Compte</NavItem>
            </LinkContainer>
            <NavItem eventKey={4} onClick={this.logout.bind(this)}>Me déconnecter</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
