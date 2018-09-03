import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteArmure, updateArmure } from "../../actions/ArmureAction";

class ArmureUpdate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: this.props.nom,
      encombrement: this.props.encombrement,
      couverture: this.props.couverture,
      points: this.props.points
    }
  }

  handleDelete(){
    let _id = this.props._id;
    this.props.deleteArmure(_id);
    this.handleChangeArmure();
  }

  handleChangeArmure() {
    let armureData = this.props.armure.map((newArmures) => {return {...newArmures}});
    for (let i = 0; i < armureData.length; i++) {
      this.setState({
        nom: armureData[i].nom,
        encombrement: armureData[i].encombrement,
        couverture: armureData[i].couverture,
        points: armureData[i].points
      });
    }
  }

  handleUpdate() {
    let _id = this.props._id;
    let armure = {
      _id:_id,
      nom: findDOMNode(this.refs.nomArmure).value,
      encombrement: findDOMNode(this.refs.encombrementArmure).value,
      couverture: findDOMNode(this.refs.couvertureArmure).value,
      points: findDOMNode(this.refs.pointsArmure).value,
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
              defaultValue={this.state.nom}
              ref='nomArmure' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="encombrementArmure">
            <FormControl
              type='text'
              defaultValue={this.state.encombrement}
              ref='encombrementArmure' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass='select' placeholder='Couverture' ref='couvertureArmure'>
              <option value={this.state.couverture}>{this.state.couverture}</option>
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
              type='text'
              defaultValue={this.state.points}
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

function mapStateToProps(state) {
  return {
    armure: state.armure.armure
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteArmure,
    updateArmure
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmureUpdate);
