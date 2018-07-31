import React, { Component } from 'react';

export class Inventaire extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.nom}</td>
        <td>{this.props.quantite}</td>
        <td>{this.props.encombrement}</td>
      </tr>
    )
  }
}
