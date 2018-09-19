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
    let userPseudo = localStorage.getItem("userPseudo");
    let userPerso = localStorage.getItem("userPerso");
    let userID = localStorage.getItem("userID");

    this.state = {
      userPseudo: userPseudo,
      userPerso: userPerso,
      userID: userID,
      modifyName: false
    }
  }

  componentDidMount() {
    const userID = { id: this.state.userID }
    this.props.getProfile(this.state.userID, this.state.userPerso);
    this.props.getUser(userID);
  }

  render() {
    return (
      <Grid id="mon-compte" className="vertical-middle" fluid>
        <Col xs={12}>
          <h1 className="align-center">Voici ton compte {this.state.userPseudo}</h1>
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
