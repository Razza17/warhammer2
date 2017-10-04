import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

export class Profil extends Component {
    render() {
        return (
            <Well>
                Nom : {this.props.nom}<br/>
                Race : {this.props.race}<br/>
                Carrière Actuelle : {this.props.carriereA}<br/>
                Ancienne Carrière : {this.props.Acarriere}<br/>
            </Well>
        )
    }
}