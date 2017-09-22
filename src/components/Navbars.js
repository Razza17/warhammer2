import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';

export class Navbars extends Component {
    render() {
        return (
            <nav data-reactroot="" className="navbar navbar-inverse">
                <div className="navbar-header">
                    <NavLink to="/" className="navbar-brand">WARHAMMER 2.0</NavLink>
                    <button type="button" className="navbar-toggle collapsed"><span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li role="presentation" className="">
                            <NavLink to="/personnage">Personnage</NavLink>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <p className="navbar-text">Hello Razza !</p>
                    </ul>
                </div>
            </nav>
        )
    }

}