import React, { Component } from 'react';
import { Button, ButtonGroup, Well } from 'react-bootstrap';


export class Fortune extends Component {
    render() {
        return (
            <Well>
                <span>Fortune : <strong>{this.props.value} {this.props.value > 1 ? 'points' : 'point'}</strong> sur  </span>
                <ButtonGroup style={{marginLeft: "20px"}}>
                    <Button bsStyle="danger">-</Button>
                    <Button bsStyle="success">+</Button>
                </ButtonGroup>
            </Well>
        );
    }
}
