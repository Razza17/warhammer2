import React, { Component } from 'react';

export class Talent extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td className="text-center">{this.props.desc}</td>
                <td className="text-center">{this.props.competence}</td>
                <td className="text-center">{this.props.bonus}</td>
            </tr>
        );
    }
}