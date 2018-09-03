import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Col } from 'react-bootstrap';

import { getProfile } from '../actions/ProfilAction';
import { getUser } from '../actions/UserAction';

import RenamePerso from '../components/compte/RenamePerso';
import ChangeUser from '../components/compte/ChangeUser';

export class MonCompte extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      modifyName: false
    }
  }

  componentDidMount() {
    this.props.getProfile(this.state.user, this.state.perso);
    this.props.getUser(this.state.user);
  }

  render() {
    return (
      <Grid id="mon-compte" className="vertical-middle" fluid>
        <Col xs={12}>
          <h1 className="align-center">Voici ton compte {this.state.user}</h1>
          {this.props.profile.map((perso, i) => <RenamePerso key={i} {...perso} />)}
          {this.props.user.map((users, i) => <ChangeUser key={i} {...users} />)}
        </Col>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile,
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile,
    getUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonCompte);
