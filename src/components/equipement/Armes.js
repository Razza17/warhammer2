import React, { Component } from 'react';

export class Armes extends Component {
    render() {
        return (
            <tr className="text-center">
                <td>{this.props.nom}</td>
                <td>{this.props.encombrement}</td>
                <td>{this.props.degats}</td>
                <td>{this.props.portee}</td>
                <td>{this.props.recharge}</td>
                <td>{this.props.attribut}</td>
            </tr>
        )
    }
}
