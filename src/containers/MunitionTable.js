import React, { Component } from 'react';
import { Table, Button, Col } from 'react-bootstrap';

import Wolfgang from '../data/Wolfgang.json';


export class MunitionTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            munition: Wolfgang.munition
        };

        this.decrementMunition = this.decrementMunition.bind(this);
        this.incrementMunition = this.incrementMunition.bind(this);
        this.handleMunition = this.handleMunition.bind(this);

    };

    decrementMunition(e) {
        e.preventDefault();
        (this.state.munition - 1 >= 0 &&
            this.setState({
                munition: this.state.munition - 1
            })
        );
    }

    incrementMunition(e) {
        e.preventDefault();
        this.setState({
            munition: this.state.munition + 1
        });
    }

    handleMunition(e) {
        e.preventDefault();
        this.setState({
            munition: e.target.value
        })
    }

    render() {

        return (
            <Col xs={12} md={4}>
                <form>
                    <Table striped condensed hover className="text-center">
                        <tbody>
                            <tr>
                                <td>Munitions : <strong>{this.state.munition} flèches</strong></td>
                                <input value={this.state.munition} maxLength="3" size="2" onChange={this.handleMunition} />
                                <td><Button bsStyle="primary" onClick={this.decrementMunition}>-</Button></td>
                                <td><Button bsStyle="primary" onClick={this.incrementMunition}>+</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </form>
            </Col>
        );
    }
}