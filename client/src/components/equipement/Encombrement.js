import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

export class Encombrement extends Component {

    render() {
        
        let total = this.props.arme + this.props.armure;
        let max = this.props.f * 10;
        
        return (
            <strong>
                <h2>
                    <Label bsStyle={total < max ? "info" : "danger"}>Encombrement : {total} sur {max}</Label>
                </h2>
            </strong>
        )
    }
}
