import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col, Panel, Button, FormGroup, InputGroup, FormControl } from 'react-bootstrap'
import { findDOMNode } from 'react-dom'

import { renameProfile } from '../../actions/ProfilAction'
import { renamePerso } from '../../actions/PersoAction'
import { logoutUser } from '../../actions/Authentication'

export class RenamePerso extends Component {

  constructor(props) {
    super(props);
    let user = localStorage.getItem("userID")
    let perso = localStorage.getItem("userPerso")

    this.state = {
      user: user,
      perso: perso,
      modifyName: false
    }
  }

  modifyName() {
    this.setState({modifyName: !this.state.modifyName})
  }

  renamePerso() {
    let newName = {
      perso: findDOMNode(this.refs.newName).value
    }
    this.props.renameProfile(this.state.user, this.state.perso, newName)
    this.props.renamePerso(this.state.user, this.state.perso, newName)
    this.props.logoutUser()
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
                      defaultValue={this.state.perso}
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
                <div>Nom de ton personnage : {this.state.perso}</div>
                <div><Button onClick={this.modifyName.bind(this)}>Modifier</Button></div>
              </div>
            }
          </Panel.Body>
        </Panel>
      </Col>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    renameProfile,
    renamePerso,
    logoutUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(RenamePerso);
