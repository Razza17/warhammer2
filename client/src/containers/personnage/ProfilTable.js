import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';
import { Profil } from "../../components/personnage/Profil";
import { getProfile } from '../../actions/ProfilAction';

class ProfilTable extends Component {
  
  componentWillMount() {
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];
    this.props.getProfile(user, perso);
  }

  render() {
    return (
      <Panel header="Personnage">
        { this.props.profile.map((perso, i) => <Profil key={i} {...perso} />) }
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
