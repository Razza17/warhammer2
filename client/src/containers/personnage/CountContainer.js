import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCount } from "../../actions/CountAction";

import Count from "../../components/personnage/Count";

class CountContainer extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getCount(userID, userPersoID);
  }

  render() {
    return (
      <Col xs={12}>
        { this.props.count.map((count, i) => <Count key={i} {...count} />) }
      </Col>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count.count
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);
