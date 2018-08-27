import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Panel, Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

import { getProfile, renameProfile } from '../../actions/ProfilAction';
import { renameDetails } from '../../actions/DetailAction';
import { renameArme } from '../../actions/ArmeAction';
import { renameArmure } from '../../actions/ArmureAction';
import { renameCarac } from '../../actions/CaracAction';
import { renameCompAvance } from '../../actions/CompAvanceAction';
import { renameCompBase } from '../../actions/CompBaseAction';
import { renameCount } from '../../actions/CountAction';
import { renameExperience } from '../../actions/ExperienceAction';
import { renameFolie } from '../../actions/FolieAction';
import { renameInventaire } from '../../actions/InventaireAction';
import { renameMoney } from '../../actions/MoneyAction';
import { renamePerso } from '../../actions/PersoAction';
import { renameTalent } from '../../actions/TalentAction';
import { getUser } from '../../actions/UserAction';

import firebase from 'firebase/app';
import 'firebase/auth';

export class RenamePerso extends Component {

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

  modifyName() {
    this.setState({modifyName: !this.state.modifyName});
  }

  renamePerso() {
    let newName = {
      perso: findDOMNode(this.refs.newName).value
    }
    this.props.renameProfile(this.state.user, this.state.perso, newName);
    this.props.renameDetails(this.state.user, this.state.perso, newName);
    this.props.renameArme(this.state.user, this.state.perso, newName);
    this.props.renameArmure(this.state.user, this.state.perso, newName);
    this.props.renameCarac(this.state.user, this.state.perso, newName);
    this.props.renameCompAvance(this.state.user, this.state.perso, newName);
    this.props.renameCompBase(this.state.user, this.state.perso, newName);
    this.props.renameCount(this.state.user, this.state.perso, newName);
    this.props.renameExperience(this.state.user, this.state.perso, newName);
    this.props.renameFolie(this.state.user, this.state.perso, newName);
    this.props.renameInventaire(this.state.user, this.state.perso, newName);
    this.props.renameMoney(this.state.user, this.state.perso, newName);
    this.props.renamePerso(this.state.user, this.state.perso, newName);
    this.props.renameTalent(this.state.user, this.state.perso, newName);

    this.deconnection();
  }

  deconnection() {
    let config = {
      apiKey: "AIzaSyCXSmiyYCqx8LWXeC16RoBFo-j0Kvlnx-Q",
      authDomain: "warhammer-81ced.firebaseapp.com",
      databaseURL: "https://warhammer-81ced.firebaseio.com",
      projectId: "warhammer-81ced",
      storageBucket: "warhammer-81ced.appspot.com",
      messagingSenderId: "1046515260577"
    };
    firebase.initializeApp(config);

    firebase.auth().signOut().then(function() {
      window.location.assign("/")
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <Col xs={6} md={4} mdOffset={2}>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h2">Modifie le nom de ton personnage</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {this.state.modifyName ?
              <ul>
                <li>
                  <FormGroup controlId="newName">
                    <InputGroup>Nouveau nom de ton personnage :</InputGroup>
                    <FormControl
                      type='text'
                      defaultValue={this.props.perso}
                      ref='newName' />
                  </FormGroup>
                </li>
                <li>
                  <Button onClick={this.renamePerso.bind(this)}>Sauvegarder</Button>
                  <Button onClick={this.modifyName.bind(this)}>Annuler</Button>
                </li>
                <li><p>Attention tu seras déconnecté automatiquement afin de faire la mise à jour. Il faudra te connecter à nouveau.</p></li>
              </ul> :
              <div>
                <div>Nom de ton personnage : {this.props.perso}</div>
                <div><Button onClick={this.modifyName.bind(this)}>Modifier</Button></div>
              </div>
            }
          </Panel.Body>
        </Panel>
      </Col>
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
    getProfile, renameProfile,
    getUser,
    renameDetails,
    renameArme,
    renameArmure,
    renameCarac,
    renameCompAvance,
    renameCompBase,
    renameCount,
    renameExperience,
    renameFolie,
    renameInventaire,
    renameMoney,
    renamePerso,
    renameTalent
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RenamePerso);