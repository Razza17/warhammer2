import React, { Component } from 'react';

export class Armure extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td>{this.props.encombrement}</td>
                <td>{this.props.couverture}</td>
                <td>{this.props.points}</td>
            </tr>
        )
    }
}
