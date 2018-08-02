import React, { Component } from 'react';
import { FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

export class TalentUpdate extends Component {

  handleUpdate() {
    let _id = this.props._id;
    let newTalent = {
      _id: _id,
      nom: findDOMNode(this.refs.nomTalent).value,
      desc: findDOMNode(this.refs.descTalent).value,
      competence: findDOMNode(this.refs.competenceTalent).value,
      bonus: findDOMNode(this.refs.bonusTalent).value
    };
    this.props.updateTalent(_id, newTalent);
    this.props.getTalent(this.props.user, this.props.perso);
  }

  render() {
    return (
      <tr>
        <td>
          <FormGroup controlId="nomTalent">
            <FormControl
              type='text'
              defaultValue={this.props.nom}
              ref='nomTalent' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="descTalent">
            <FormControl
              type='text'
              defaultValue={this.props.desc}
              ref='descTalent' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="competenceTalent">
            <FormControl
              type='text'
              defaultValue={this.props.competence}
              ref='competenceTalent' />
          </FormGroup>
        </td>
        <td>
          <FormGroup controlId="bonusTalent">
            <FormControl
              type='text'
              defaultValue={this.props.bonus}
              ref='bonusTalent' />
          </FormGroup>
        </td>
        <td>
          <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />
        </td>
      </tr>
    );
  }
}
