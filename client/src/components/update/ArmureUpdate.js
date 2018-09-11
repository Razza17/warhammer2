import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteArmure, updateArmure } from "../../actions/ArmureAction";

class ArmureUpdate extends Component {

  handleDelete(){
    let _id = this.props._id;
    this.props.deleteArmure(_id);
  }

  handleUpdate() {
    let _id = this.props._id;
    let armure = {
      _id:_id,
      nom: findDOMNode(this.refs.nomArmure).value,
      encombrement: parseFloat(findDOMNode(this.refs.encombrementArmure).value),
      couverture: findDOMNode(this.refs.couvertureArmure).value,
      points: parseFloat(findDOMNode(this.refs.pointsArmure).value)
    };
    this.props.updateArmure(_id, armure);
  }

  render() {
    return (
      <tr>
        <td>
          <FormGroup controlId="nomArmure">
            <FormControl
              type='text'
              defaultValue={this.props.nom}
              ref='nomArmure' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="encombrementArmure">
            <FormControl
              type='number'
              defaultValue={this.props.encombrement}
              ref='encombrementArmure' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass='select' placeholder='Couverture' ref='couvertureArmure'>
              <option value={this.props.couverture}>{this.props.couverture}</option>
              <option value="Tête">Tête</option>
              <option value="Bras">Bras</option>
              <option value="Corps">Corps</option>
              <option value="Corps + Bras">Corps + Bras</option>
              <option value="Jambes">Jambes</option>
            </FormControl>
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="pointsArmure">
            <FormControl
              type='number'
              defaultValue={this.props.points}
              ref='pointsArmure' />
          </FormGroup>
        </td>
        <td>
          <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />&nbsp;&nbsp;<Glyphicon glyph="remove" onClick={this.handleDelete.bind(this)} />
        </td>
      </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteArmure,
    updateArmure
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(ArmureUpdate);
