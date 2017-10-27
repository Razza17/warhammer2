import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Fortune } from "../../components/personnage/Fortune";
import { getFortune } from "../../actions/FortuneAction";

class FortuneContainer extends Component {
    componentDidMount() {
        this.props.getFortune();
    }

    render() {
        return (
            <Col xs={12} md={4}>
                <Row className="text-center">
                    { this.props.fortune.map((fortune, i) => <Fortune key={i} {...fortune} />) }
                </Row>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        fortune: state.fortune.fortune
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getFortune:getFortune
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FortuneContainer);