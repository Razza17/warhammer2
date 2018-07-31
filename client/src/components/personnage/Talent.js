import React, { Component } from 'react';

export class Talent extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.nom}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.competence}</td>
        <td>{this.props.bonus}</td>
      </tr>
    );
  }
}
