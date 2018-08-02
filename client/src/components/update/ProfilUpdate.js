import React, { Component } from 'react';
import { FormGroup, FormControl, OverlayTrigger, Glyphicon, Tooltip } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

export class ProfilUpdate extends Component {

  handleUpdate() {
    let id = this.props._id;
    let newData = {
      carriereA: findDOMNode(this.refs.carriereA).value,
      Acarriere: findDOMNode(this.refs.Acarriere).value
    };

    this.props.updateProfile(id, newData);
    this.props.getProfile();
  }

  render() {
    let tooltip = <Tooltip id={this.props._id}>Click here to update</Tooltip>;
      return (
        <tr>
          <td>
            <FormGroup controlId="carriereA">
              <FormControl
                type='text'
                defaultValue={this.props.carriereA}
                ref='carriereA' />
            </FormGroup>
          </td>
          <td>
            <FormGroup controlId="Acarriere">
              <FormControl
                type='text'
                defaultValue={this.props.Acarriere}
                ref='Acarriere' />
            </FormGroup>
          </td>
          <td>
            <OverlayTrigger placement="bottom" overlay={tooltip} delayShow={300} delayHide={150}>
              <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />
            </OverlayTrigger>
          </td>
        </tr>
      )
    }
  }
