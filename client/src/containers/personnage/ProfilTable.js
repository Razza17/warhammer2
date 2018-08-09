import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';
import { Profil } from "../../components/personnage/Profil";
import { getProfile } from '../../actions/ProfilAction';

class ProfilTable extends Component {

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
    this.props.getProfile(this.state.user, this.state.perso);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{this.state.perso}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          { this.props.profile.map((perso, i) => <Profil key={i} {...perso} />) }
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilTable);
