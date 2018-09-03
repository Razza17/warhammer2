import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Count from "../../components/personnage/Count";
import { getCount, updateCount } from "../../actions/CountAction";

class CountContainer extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.props.getCount(user, perso);

    this.state = {
      user: user,
      perso: perso
    }
  }

  render() {
    return (
      <Col xs={12}>
        { this.props.count.map((count, i) => <Count key={i} {...count} get={this.props.getCount} update={this.props.updateCount} />) }
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
    getCount, updateCount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);
