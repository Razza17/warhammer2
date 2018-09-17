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
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];

    this.props.getPerso(user);

    this.state = {
      user: user
    }
  }

  handleSubmit() {
    let perso = findDOMNode(this.refs.perso).value;
    localStorage.setItem('userPerso', perso);
    window.location.assign("./personnage?pseudo=" + this.state.user + "&perso=" + perso);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.perso.length === 0) {
      window.location.assign("/creationProfile?pseudo="+this.state.user)
    }
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{"Choisis ton personnage " + this.state.user}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="select" ref="perso">
              { this.props.perso.map((persos, i) => <option key={persos._id} value={persos.nom}>{persos.nom}</option>) }
            </FormControl>
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Aller au combat</Button>
          <LinkContainer to={"/creationProfile?pseudo="+this.state.user} className="btn-right">
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
