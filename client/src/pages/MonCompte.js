import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Col } from 'react-bootstrap';

import { getProfile } from '../actions/ProfilAction';
import { getUser } from '../actions/Authentication';

import RenamePerso from '../components/compte/RenamePerso';
import ChangeUser from '../components/compte/ChangeUser';

export class MonCompte extends Component {

  constructor(props) {
    super(props);
    let user = localStorage.getItem("userPseudo");
    let perso = localStorage.getItem("userPerso");

    this.state = {
      user: user,
      perso: perso,
      modifyName: false
    }
  }

  componentDidMount() {
    const pseudo = {pseudo: this.state.user}
    this.props.getProfile(this.state.user, this.state.perso);
    this.props.getUser(pseudo);
  }

  render() {
    return (
      <Grid id="mon-compte" className="vertical-middle" fluid>
        <Col xs={12}>
          <h1 className="align-center">Voici ton compte {this.state.user}</h1>
          {this.props.profile.map((perso, i) => <RenamePerso key={i} {...perso} />)}
          {this.props.userData.map((user, i) => <ChangeUser key={i} {...user} />)}
        </Col>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile,
    userData: state.auth.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile,
    getUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MonCompte);
