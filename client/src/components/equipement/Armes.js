import React, { Component } from 'react';

export class Armes extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td>{this.props.encombrement}</td>
                <td>{this.props.degats}</td>
                <td>{this.props.portee}</td>
                <td>{this.props.rechargement !== undefined ? this.props.rechargement : 0}</td>
                <td>{this.props.attributs}</td>
            </tr>
        )
    }
}
