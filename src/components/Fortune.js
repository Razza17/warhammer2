import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup, Well } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { fortuneIncrement, fortuneDecrement } from "../actions/FortuneAction";

class Fortune extends Component {

    decrementPoint(points, unit) {
        (this.props.points > 0 && 
            this.props.fortuneDecrement(this.props.points, 1)
        )
    }

    incrementPoint(points, unit) {
        (this.props.points !== this.props.maxPoints[0].pd && this.props.fortuneIncrement(this.props.points, 1))
    }

    render() {
        return (
            <Col xs={12} md={4}>
                <Row className="text-center">
                    <Well>
                        <span>Fortune : <strong>{this.props.points} {this.props.points > 1 ? 'points' : 'point'}</strong> sur {this.props.maxPoints[0].pd}</span>
                        <ButtonGroup style={{marginLeft: "20px"}}>
                            <Button bsStyle='danger' onClick={this.decrementPoint.bind(this)}>-</Button>
                            <Button bsStyle="success" onClick={this.incrementPoint.bind(this)}>+</Button>
                        </ButtonGroup>
                    </Well>
                </Row>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        points: state.points.points,
        maxPoints: state.maxPoints.maxPoints
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fortuneIncrement,
        fortuneDecrement
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Fortune);