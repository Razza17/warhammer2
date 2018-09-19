import React, { Component } from 'react';
import { Table, Panel, Button, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getInventaire, postInventaire } from "../../actions/InventaireAction";
import { Inventaire } from "../../components/equipement/Inventaire";
import InventaireUpdate from '../../components/update/InventaireUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class InventaireTable extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPerso = localStorage.getItem('userPerso');

    this.props.getInventaire(userID, userPerso);

    this.state = {
      userID: userID,
      userPerso: userPerso,
      update: false
    }
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  handleSubmit() {
    const inventaire = {
      nom: findDOMNode(this.refs.nomPostInventaire).value,
      quantite: findDOMNode(this.refs.quantitePostInventaire).value,
      encombrement: findDOMNode(this.refs.encPostInventaire).value,
      user: this.state.userID,
      perso: this.state.userPerso
    };
    this.props.postInventaire(inventaire);
    this.resetForm();
  }

  resetForm() {
    findDOMNode(this.refs.nomPostInventaire).value = "";
    findDOMNode(this.refs.quantitePostInventaire).value = "";
    findDOMNode(this.refs.encPostInventaire).value = "";
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Inventaire</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed bordered hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                <th><span className="show-desktop">Quantité</span><span className="show-mobile">Qté</span></th>
                <th><span className="show-desktop">Encombrement</span><span className="show-mobile">Enc</span></th>
                {this.state.update && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              { this.props.inventaire.map((inventaire, i) => this.state.update ? <InventaireUpdate key={inventaire._id} {...inventaire} /> : <Inventaire key={i} {...inventaire}/>) }
              {this.state.update &&
                <tr>
                  <td>
                    <FormGroup controlId="nomPostInventaire">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomPostInventaire' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="quantitePostInventaire">
                      <FormControl
                        type='number'
                        placeholder='Quantité'
                        ref='quantitePostInventaire' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="encPostInventaire">
                      <FormControl
                        type='number'
                        placeholder='Encombrement'
                        ref='encPostInventaire' />
                    </FormGroup>
                  </td>
                  <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Ajouter</Button></td>
                </tr>
              }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    inventaire: state.inventaire.inventaire,
    modified: state.inventaire.payload,
    msg: state.inventaire.msg,
    style: state.inventaire.style
  }
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({
    getInventaire, postInventaire
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(updateMessage(InventaireTable));
