import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteInventaire, updateInventaire } from "../../actions/InventaireAction";

class InventaireUpdate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: this.props.nom,
      quantite: this.props.quantite,
      encombrement: this.props.encombrement
    }
  }

  handleDelete(){
    let _id = this.props._id;
    this.props.deleteInventaire(_id);
    this.handleChangeValue();
  }

  handleChangeValue() {
    let invData = this.props.inventaire.map((inv) => {return {...inv}});
    for (let i = 0; i < invData.length; i++) {
      this.setState({
        nom: invData[i].nom,
        quantite: invData[i].quantite,
        encombrement: invData[i].encombrement
      })
    }
  }

  handleUpdate() {
    let _id = this.props._id;
    let inventaire = {
      _id:_id,
      nom: findDOMNode(this.refs.nomInventaire).value,
      quantite: findDOMNode(this.refs.quantiteInventaire).value,
      encombrement: findDOMNode(this.refs.encombrementInventaire).value
    };
    this.props.updateInventaire(_id, inventaire);
    this.props.getInventaire(this.props.user, this.props.perso);
  }


  render() {
    return (
      <tr>
        <td>
          <FormGroup controlId="nomInventaire">
            <FormControl
              type='text'
              defaultValue={this.state.nom}
              ref='nomInventaire' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="quantiteInventaire">
            <FormControl
              type='text'
              defaultValue={this.state.quantite}
              ref='quantiteInventaire' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="encombrementInventaire">
            <FormControl
              type='text'
              defaultValue={this.state.encombrement}
              ref='encombrementInventaire' />
          </FormGroup>
        </td>
        <td>
          <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />&nbsp;&nbsp;<Glyphicon glyph="remove" onClick={this.handleDelete.bind(this)} />
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state){
  return {
    inventaire: state.inventaire.inventaire
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteInventaire,
    updateInventaire
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InventaireUpdate);
