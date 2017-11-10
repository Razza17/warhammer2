import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export class Encombrement extends Component {

    render() {
        
        let total = this.props.arme + this.props.armure + this.props.inventaire;
        let max = this.props.f * 10;
        let encombrement = "Encombrement : " + total + " sur " + max;

        return (
            <Panel header={encombrement} bsStyle={total < max ? "default" : "danger"}></Panel>
        )
    }
}
