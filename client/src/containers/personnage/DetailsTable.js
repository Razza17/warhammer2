import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';
import {Details} from "../../components/personnage/Details";
import { getDetails } from '../../actions/DetailAction';

class DetailsTable extends Component {

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
    this.props.getDetails(this.state.user, this.state.perso);
  }

  render() {
    return (
      <Panel header="Détails du personnage">
        {
          this.props.details.map((details, i) => <Details key={i} {...details} />)
        }
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    details: state.details.details
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsTable);
