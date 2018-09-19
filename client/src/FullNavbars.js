import React, { Component }  from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logoutUser } from './actions/Authentication';

class FullNavbars extends Component {

  constructor(props) {
    super(props);

    let token = false
    let pathname = window.location.pathname
    let personnage = false
    let equipement = false
    let combat = false
    let monCompte = false
    let inGame = false

    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      if(localStorage.getItem('jwtToken') !== "" && localStorage.getItem('jwtToken') !== null) {
        token = true
      }
    }

    if(pathname === "/personnage") {
      personnage = true;
      inGame = true;
    } else if (pathname === "/equipement") {
      equipement = true;
      inGame = true;
    } else if (pathname === "/combat") {
      combat = true;
      inGame = true;
    } else if (pathname === "/monCompte") {
      monCompte = true;
      inGame = true;
    }

    this.state = {
      personnage: personnage,
      equipement: equipement,
      combat: combat,
      monCompte: monCompte,
      isAuthenticated: token,
      isInGame: inGame
    }
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

  onLogout() {
    this.props.logoutUser();
  }

  render() {
    const authNav = (
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to={"/personnage"}>
            <NavItem onClick={this.active.bind(this, "personnage")} className={this.state.personnage ? "activated" : "noActive"} eventKey={0}>Personnage</NavItem>
          </LinkContainer>
          <LinkContainer to={"/equipement"}>
            <NavItem onClick={this.active.bind(this, "equipement")} className={this.state.equipement ? "activated" : "noActive"} eventKey={1}>Equipement</NavItem>
          </LinkContainer>
          <LinkContainer to={"/combat"}>
            <NavItem onClick={this.active.bind(this, "combat")} className={this.state.combat ? "activated" : "noActive"} eventKey={2}>Combat</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to={"/monCompte"}>
            <NavItem onClick={this.active.bind(this, "monCompte")} className={this.state.monCompte ? "activated" : "noActive"} eventKey={3}>Mon Compte</NavItem>
          </LinkContainer>
          <NavItem eventKey={4} onClick={this.onLogout.bind(this)}>Me déconnecter</NavItem>
        </Nav>
      </Navbar.Collapse>
    )
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <div className="navbar-brand">WARHAMMER 2.0</div>
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
        {this.state.isAuthenticated && this.state.isInGame ? authNav : null}
      </Navbar>
    )
  }
}

FullNavbars.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(FullNavbars);
