import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export class Navbars extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" className="navbar-brand">WARHAMMER 2.0</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <li><NavLink to="/personnage">Personnage</NavLink></li>
                        <li><NavLink to="/equipement">Equipement</NavLink></li>
                        <li><NavLink to="/update">Update your Character</NavLink></li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}
