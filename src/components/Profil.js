import React, { Component } from 'react';

export class Profil extends Component {
    render() {
        return (
            <tbody>
            <tr><td>Nom : {this.props.nom}</td></tr>
            <tr><td>Race : {this.props.race}</td></tr>
            <tr><td>Carrière Actuelle : {this.props.carriereA}</td></tr>
            <tr><td>Ancienne Carrière : {this.props.Acarriere}</td></tr>
            </tbody>
        )
    }
}