import React, { Component } from 'react';

import { Navbars } from "./Navbars";
import { FullNavbars } from "./FullNavbars";
import Content from "./Content";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FullNavbars />
        <Content />
      </div>
    );
  }
}
