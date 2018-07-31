import React, { Component } from 'react';

export class Profil extends Component {
  render() {
    return (
      <ul>
        <li>Nom : {this.props.nom}</li>
        <li>Race : {this.props.race}</li>
        <li>Carrière Actuelle : {this.props.carriereA}</li>
        <li>Ancienne Carrière : {this.props.Acarriere}</li>
      </ul>
    )
  }
}
