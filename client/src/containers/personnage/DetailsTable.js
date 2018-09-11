import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';

import { getDetails } from '../../actions/DetailAction';

import {Details} from "../../components/personnage/Details";

class DetailsTable extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.props.getDetails(user, perso);

    this.state = {
      perso: perso
    }
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{"Détails de " + this.state.perso}</Panel.Title>
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
