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

export class ChangeUser extends Component {

  constructor(props) {
    super(props);
    let user = localStorage.getItem("userPseudo");
    let perso = localStorage.getItem("userPerso");

    this.state = {
      user: user,
      perso: perso,
      modifyUser: false
    }
  }

  modifyUser() {
    this.setState({modifyUser: !this.state.modifyUser});
  }

  changeUser() {
    let newUserName = {
      user: findDOMNode(this.refs.newPseudo).value
    }
    this.props.renameProfile(this.state.user, this.state.perso, newUserName);
    this.props.renameDetails(this.state.user, this.state.perso, newUserName);
    this.props.renameArme(this.state.user, this.state.perso, newUserName);
    this.props.renameArmure(this.state.user, this.state.perso, newUserName);
    this.props.renameCarac(this.state.user, this.state.perso, newUserName);
    this.props.renameCompAvance(this.state.user, this.state.perso, newUserName);
    this.props.renameCompBase(this.state.user, this.state.perso, newUserName);
    this.props.renameCount(this.state.user, this.state.perso, newUserName);
    this.props.renameExperience(this.state.user, this.state.perso, newUserName);
    this.props.renameFolie(this.state.user, this.state.perso, newUserName);
    this.props.renameInventaire(this.state.user, this.state.perso, newUserName);
    this.props.renameMoney(this.state.user, this.state.perso, newUserName);
    this.props.renamePerso(this.state.user, this.state.perso, newUserName);
    this.props.renameTalent(this.state.user, this.state.perso, newUserName);

    let newUserInfos = {
      nom: findDOMNode(this.refs.newNom).value,
      prenom: findDOMNode(this.refs.newPrenom).value,
      pseudo: findDOMNode(this.refs.newPseudo).value,
      email: findDOMNode(this.refs.newEmail).value
    }
    this.props.updateUser(this.state.user, newUserInfos);

    this.deconnection();
  }

  deconnection() {
    window.location.assign("/")
  }

  render() {
    return (
      <Col xs={6} md={4}>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h2">Modifie tes informations de compte</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {this.state.modifyUser ?
              <ul>
                <li>
                  <FormGroup controlId="newNom">
                    <InputGroup>Change ton Nom :</InputGroup>
                    <FormControl
                      type='text'
                      defaultValue={this.props.nom}
                      ref='newNom' />
                  </FormGroup>
                </li>
                <li>
                  <FormGroup controlId="newPrenom">
                    <InputGroup>Change ton Prénom :</InputGroup>
                    <FormControl
                      type='text'
                      defaultValue={this.props.prenom}
                      ref='newPrenom' />
                  </FormGroup>
                </li>
                <li>
                  <FormGroup controlId="newPseudo">
                    <InputGroup>Change ton pseudo :</InputGroup>
                    <FormControl
                      type='text'
                      defaultValue={this.props.pseudo}
                      ref='newPseudo' />
                  </FormGroup>
                </li>
                <li>
                  <FormGroup controlId="newEmail">
                    <InputGroup>Change ton email :</InputGroup>
                    <FormControl
                      type='text'
                      defaultValue={this.props.email}
                      ref='newEmail' />
                  </FormGroup>
                </li>
                <li>
                  <Button onClick={this.changeUser.bind(this)}>Sauvegarder</Button>
                  <Button onClick={this.modifyUser.bind(this)}>Annuler</Button>
                </li>
                <li><p>Attention tu seras déconnecté automatiquement afin de faire la mise à jour. Il faudra te connecter à nouveau.</p></li>
              </ul> :
              <ul>
                <li>nom : {this.props.nom}</li>
                <li>prénom : {this.props.prenom}</li>
                <li>pseudo : {this.props.pseudo}</li>
                <li>email : {this.props.email}</li>
                <li><Button onClick={this.modifyUser.bind(this)}>Modifier</Button></li>
              </ul>
            }
          </Panel.Body>
        </Panel>
      </Col>
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
    getProfile, renameProfile,
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUser);
