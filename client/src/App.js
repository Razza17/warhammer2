import React, { Component } from 'react';

import {Navbars} from "./components/nav/Navbars";
import Content from "./containers/Content";

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
