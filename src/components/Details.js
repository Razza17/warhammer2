import React, { Component } from 'react';

export class Details extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>Age : {this.props.age} ans</td>
                    <td>Sexe : {this.props.sexe}</td>
                </tr>
                <tr>
                    <td>Couleur des yeux : {this.props.yeux}</td>
                    <td>Taille : {this.props.taille}</td>
                </tr>
                <tr>
                    <td>Couleur des cheveux : {this.props.cheveux}</td>
                    <td>Poids : {this.props.poids}</td>
                </tr>
                <tr>
                    <td>Signe Astral : {this.props.signeAstral}</td>
                    <td>Nbre de frères et soeurs : {this.props.fraterie}</td>
                </tr>
                <tr>
                    <td colSpan="2">Lieu de Naissance : {this.props.naissance}</td>
                </tr>
                <tr>
                    <td colSpan="2">Signes distinctifs : {this.props.distinction}</td>
                </tr>
            </tbody>
        )
    }
}