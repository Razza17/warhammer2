import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup, Well } from 'react-bootstrap';

import Wolfgang from '../data/Wolfgang.json';


export class MunitionTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            munition: Wolfgang.munition
        };

        this.decrementMunition = this.decrementMunition.bind(this);
        this.incrementMunition = this.incrementMunition.bind(this);

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

    render() {

        return (
            <Col xs={12} md={4}>
              <Row className="text-center">
                  <Well>
                    <span>Munitions : <strong>{this.state.munition} flèches</strong></span>
                    <ButtonGroup style={{marginLeft: "20px"}}>
                      <Button bsStyle="danger" onClick={this.decrementMunition}>-</Button>
                      <Button bsStyle="success" onClick={this.incrementMunition}>+</Button>
                    </ButtonGroup>
                  </Well>
              </Row>
            </Col>
        );
    }
}
