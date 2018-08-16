import React, { Component } from 'react';

import { Navbars } from "./Navbars";
import { FullNavbars } from "./FullNavbars";
import Content from "./Content";

export default class App extends Component {

  constructor(props) {
    super(props);

    if (window.location.pathname === "/personnage" || window.location.pathname === "/equipement" || window.location.pathname === "/combat" || window.location.pathname === "/moncompte") {
      this.state = {
        fullNav: true
      }
    } else {
      this.state = {
        fullNav: false
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.fullNav ? <FullNavbars />  : <Navbars />}
        <Content />
      </div>
    );
  }
}
