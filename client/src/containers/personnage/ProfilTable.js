import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, Button, Glyphicon } from 'react-bootstrap';

import { Profil } from "../../components/personnage/Profil";
import { ProfilUpdate } from "../../components/update/ProfilUpdate";

import { getProfile, updateProfile } from '../../actions/ProfilAction';

class ProfilTable extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      update: false
    }
  }

  componentWillMount() {
    this.props.getProfile(this.state.user, this.state.perso);
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{this.state.perso}</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          { this.props.profile.map((perso, i) => this.state.update ? <ProfilUpdate key={i} {...perso} getProfile={this.props.getProfile} updateProfile={this.props.updateProfile} user={this.state.user} perso={this.state.perso} /> : <Profil key={i} {...perso} />) }
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
    getProfile, updateProfile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilTable);
