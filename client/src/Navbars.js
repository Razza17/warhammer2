import React, { Component }  from 'react';
import { Navbar } from 'react-bootstrap';

export class Navbars extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="navbar-brand">
            WARHAMMER 2.0
          </Navbar.Brand>
          <Navbar.Toggle id='collapseButton' />
        </Navbar.Header>
      </Navbar>
    )
  }
}
