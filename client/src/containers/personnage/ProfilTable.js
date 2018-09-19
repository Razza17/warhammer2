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
    let userID = localStorage.getItem('userID');
    let userPerso = localStorage.getItem('userPerso');

    this.props.getProfile(userID, userPerso);

    this.state = {
      userPerso: userPerso,
      update: false
    }
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
          <Panel.Title componentClass="h2">Profil de {this.state.userPerso}</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          { this.props.profile.map((perso, i) => this.state.update ? <ProfilUpdate key={i} {...perso} getProfile={this.props.getProfile} updateProfile={this.props.updateProfile} user={this.state.userPerso} perso={this.state.perso} /> : <Profil key={i} {...perso} />) }
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile.profile
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getProfile, updateProfile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilTable);
