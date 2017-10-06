import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

export class Profil extends Component {
    render() {
        return (
            <Well>
              <ul>
                <li>Nom : {this.props.nom}</li>
                <li>Race : {this.props.race}</li>
                <li>Carrière Actuelle : {this.props.carriereA}</li>
                <li>Ancienne Carrière : {this.props.Acarriere}</li>
              </ul>
            </Well>
        )
    }
}
