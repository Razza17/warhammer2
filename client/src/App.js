import React, { Component } from 'react';

import { Navbars } from "./Navbars";
import Content from "./Content";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbars />
                <Content />
            </div>
        );
    }
}
