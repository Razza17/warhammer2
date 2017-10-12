import React, { Component } from 'react';
import { Col, Row, Button, ButtonGroup, Well } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { blessureIncrement, blessureDecrement } from "../actions/BlessureAction";


class BlessureTable extends Component {

    decrementBlessure() {
      (this.props.blessure > -10 &&
        this.props.blessureDecrement(this.props.blessure, 1)
      )
    }

    incrementBlessure() {
      (this.props.blessure !== this.props.maxBlessure[0].b &&
        this.props.blessureIncrement(this.props.blessure, 1)
      );
    }

    render() {

        return (
          <Col xs={12} sm={4}>
              <Row className="text-center">
                  <Well>
                      <span>Blessures : <strong>{this.props.blessure} {this.props.blessure > 1 ? 'points' : 'point'}</strong> sur {this.props.maxBlessure[0].b}</span>
                      <ButtonGroup style={{marginLeft: "20px"}}>
                          <Button bsStyle='danger' onClick={this.decrementBlessure.bind(this)}>-</Button>
                          <Button bsStyle="success" onClick={this.incrementBlessure.bind(this)}>+</Button>
                      </ButtonGroup>
                  </Well>
              </Row>
          </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        blessure: state.blessure.blessure,
        maxBlessure: state.maxBlessure.maxBlessure
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        blessureIncrement,
        blessureDecrement
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlessureTable);
