import React, { Component } from 'react';
import { Table, Button, Col } from 'react-bootstrap';
import Wolfgang from '../data/Wolfgang.json';


export class FortuneTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            points: Wolfgang.pointFortune,
            maxPoints: Wolfgang.maxPointFortune
        };

        this.decrementPoint = this.decrementPoint.bind(this);
        this.incrementPoint = this.incrementPoint.bind(this);

    };

    decrementPoint(e) {
        e.preventDefault();
        (this.state.points - 1 >= 0 &&
            this.setState({
                points: this.state.points - 1
            })
        );
    }

    incrementPoint(e) {
        e.preventDefault();
        (this.state.points + 1 <= this.state.maxPoints &&
                this.setState({
                    points: this.state.points + 1
                })
        );
    }

    render() {

        return (
            <Col xs={12} md={4}>
                <Table striped condensed hover className="text-center">
                    <tbody>
                        <tr>
                            <td>Fortune : <strong>{this.state.points} points</strong> sur {this.state.maxPoints}</td>
                            <td><Button bsStyle="primary" onClick={this.decrementPoint}>-</Button></td>
                            <td><Button bsStyle="primary" onClick={this.incrementPoint}>+</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}