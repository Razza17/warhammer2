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

    this.state = {
      user: user,
      perso: perso
    }
  }

  componentWillMount() {
    this.props.getCount(this.state.user,this.state.perso);
  }

  render() {
    return (
      <Col xs={12}>
        { this.props.count.map((count, i) => <Count key={i} {...count} get={this.props.getCount} update={this.props.updateCount} />) }
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
    getCount,
    updateCount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);
