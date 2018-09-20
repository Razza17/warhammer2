import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';

import { getDetails } from '../../actions/DetailAction';

import {Details} from "../../components/personnage/Details";

class DetailsTable extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPerso = localStorage.getItem('userPerso');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getDetails(userID, userPersoID);

    this.state = {
      userPerso: userPerso
    }
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{"Détails de " + this.state.userPerso}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          { this.props.details.map((details, i) => <Details key={i} {...details} />) }
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    details: state.details.details
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsTable);
