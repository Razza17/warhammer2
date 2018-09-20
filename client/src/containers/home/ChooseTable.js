import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { getPerso } from '../../actions/PersoAction';

class ChooseTable extends Component {

  constructor(props) {
    super(props);
    let userPseudo = localStorage.getItem('userPseudo');
    let userID = localStorage.getItem('userID');

    this.props.getPerso(userID);

    this.state = {
      userPseudo: userPseudo
    }
  }

  handleSubmit() {
    let perso = findDOMNode(this.refs.perso).value;
    let persoID = ''
    this.props.perso.map((persos) => {
      if(persos.nom === perso) {
        return persoID = persos._id
      }
      return true
    })
    localStorage.setItem('userPerso', perso);
    localStorage.setItem('userPersoID', persoID);
    window.location.assign("/personnage")
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.perso.length === 0) {
      window.location.assign("/creationProfile")
    }
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{"Choisis ton personnage " + this.state.userPseudo}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="select" ref="perso">
              { this.props.perso.map((persos, i) => <option key={persos._id} value={persos.nom}>{persos.nom}</option>) }
            </FormControl>
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Aller au combat</Button>
          <LinkContainer to={"/creationProfile"} className="btn-right">
            <Button>Créer un autre personnage</Button>
          </LinkContainer>
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    perso: state.perso.perso
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPerso
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTable);
