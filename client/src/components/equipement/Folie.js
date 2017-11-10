import React, { Component } from 'react';

export class Folie extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
            </tr>
        )
    }
}
