import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Count from "../../components/personnage/Count";
import { getCount, updateCount } from "../../actions/CountAction";

class CountContainer extends Component {
    componentDidMount() {
        this.props.getCount();
    }

    render() {
        return (
            <Col xs={12} md={3}>
                <Row>
                    { this.props.count.map((count, i) => <Count key={i} {...count} get={this.props.getCount} update={this.props.updateCount} />) }
                </Row>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count.count
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCount:getCount,
        updateCount:updateCount
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);