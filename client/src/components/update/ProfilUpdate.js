import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

export class ProfilUpdate extends Component {

  handleUpdate() {
    let id = this.props._id;
    let newData = {
      carriereA: findDOMNode(this.refs.carriereA).value,
      Acarriere: findDOMNode(this.refs.Acarriere).value,
      page: "personnage"
    };

    this.props.updateProfile(id, newData);
    this.props.getProfile(this.props.user, this.props.perso);
  }

  render() {
    return (
      <ul>
        <li>
          <FormGroup controlId="carriereA">
            <InputGroup>Carrière actuelle :</InputGroup>
            <FormControl
              type='text'
              defaultValue={this.props.carriereA}
              ref='carriereA' />
          </FormGroup>
        </li>
        <li>
          <FormGroup controlId="Acarriere">
            <InputGroup>Ancienne Carrière :</InputGroup>
            <FormControl
              type='text'
              defaultValue={this.props.Acarriere}
              ref='Acarriere' />
          </FormGroup>
        </li>
        <li>
          <Button onClick={this.handleUpdate.bind(this)}>Modifier</Button>
        </li>
      </ul>
    )
  }
}
