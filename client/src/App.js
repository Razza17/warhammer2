import React, { Component } from 'react';

import FullNavbars from "./FullNavbars";
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
