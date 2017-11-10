import React, { Component } from 'react';

export class Details extends Component {
    render() {
        return (
          <ul>
            <li>Age : {this.props.age} ans</li>
            <li>Sexe : {this.props.sexe}</li>
            <li>Couleur des yeux : {this.props.yeux}</li>
            <li>Taille : {this.props.taille}</li>
            <li>Couleur des cheveux : {this.props.cheveux}</li>
            <li>Poids : {this.props.poids}</li>
            <li>Signe Astral : {this.props.signeAstral}</li>
            <li>Nbre de frères et soeurs : {this.props.fraterie}</li>
            <li>Lieu de Naissance : {this.props.naissance}</li>
            <li>Signes distinctifs : {this.props.distinction}</li>
          </ul>
        )
    }
}
