import React, { Component } from 'react';
import { Col, Table, Button } from 'react-bootstrap';

import Wolfgang from '../data/Wolfgang.json';
import { fortuneIncrement, fortuneDecrement } from "../actions/fortune";

export class Fortune extends Component {
    constructor(props) {
        super(props);

        this.state = {
            points: props.points || Wolfgang.pointFortune,
            maxPoints: Wolfgang.actuel
        };

        this.decrementPoint = this.decrementPoint.bind(this);
        this.incrementPoint = this.incrementPoint.bind(this);

    };

    decrementPoint(e) {
        e.preventDefault();
        this.setState({
            points: this.state.points - 1
        });
        this.props.dispatch(fortuneDecrement(this.state.points));
    }

    incrementPoint(e) {
        e.preventDefault();
        (this.state.points + 1 <= this.state.maxPoints[0].pd &&
            this.setState({
                points: this.state.points + 1
            })
        );
        this.props.dispatch(fortuneIncrement(this.state.points));
    }

    render() {
        return (
            <Col xs={12} md={4}>
                <Table striped condensed hover className="text-center">
                    <tbody>
                    <tr>
                        <td>Fortune : <strong>{this.state.points} {this.state.points > 1 ? 'points' : 'point'}</strong> sur {this.state.maxPoints[0].pd}</td>
                        <td><Button bsStyle="primary" onClick={this.decrementPoint}>-</Button></td>
                        <td><Button bsStyle="primary" onClick={this.incrementPoint}>+</Button></td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}