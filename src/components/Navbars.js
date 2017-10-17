import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

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
                        <NavItem><NavLink to="/personnage">Personnage</NavLink></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}
