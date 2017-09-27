import React, { Component } from 'react';
import { Table, Button, Col } from 'react-bootstrap';

import Wolfgang from '../data/Wolfgang.json';


export class BlessureTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blessure: Wolfgang.pointBlessure,
            maxBlessure: Wolfgang.actuel
        };

        this.decrementBlessure = this.decrementBlessure.bind(this);
        this.incrementBlessure = this.incrementBlessure.bind(this);

    };

    decrementBlessure(e) {
        e.preventDefault();
        (this.state.blessure - 1 >= 0 &&
            this.setState({
                blessure: this.state.blessure - 1
            })
        );
    }

    incrementBlessure(e) {
        e.preventDefault();
        (this.state.blessure + 1 <= this.state.maxBlessure[0].b &&
                this.setState({
                    blessure: this.state.blessure + 1
                })
        );
    }

    render() {

        return (
            <Col xs={12} md={4}>
                <Table striped condensed hover className="text-center">
                    <tbody>
                        <tr>
                            <td>Blessures : <strong>{this.state.blessure} points</strong> sur {this.state.maxBlessure[0].b}</td>
                            <td><Button bsStyle="primary" onClick={this.decrementBlessure}>-</Button></td>
                            <td><Button bsStyle="primary" onClick={this.incrementBlessure}>+</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}