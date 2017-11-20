import React, { Component } from 'react';

export class PointArmure extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>Tête</td>
                    <td>{this.props.ptsTete + this.props.be}</td>
                    <td>01 - 15</td>
                </tr>
                <tr>
                    <td>Bras droit</td>
                    <td>{this.props.ptsBras + this.props.ptsTorse + this.props.be}</td>
                    <td>16 - 35</td>
                </tr>
                <tr>
                    <td>Bras gauche</td>
                    <td>{this.props.ptsBras + this.props.ptsTorse + this.props.be}</td>
                    <td>35 - 55</td>
                </tr>
                <tr>
                    <td>Corps</td>
                    <td>{this.props.ptsCorps + this.props.ptsTorse + this.props.be}</td>
                    <td>56 - 80</td>
                </tr>
                <tr>
                    <td>Jambe droite</td>
                    <td>{this.props.ptsJambes + this.props.be}</td>
                    <td>81 - 90</td>
                </tr>
                <tr>
                    <td>Jambe gauche</td>
                    <td>{this.props.ptsJambes + this.props.be}</td>
                    <td>91 - 00</td>
                </tr>
            </tbody>
        )
    }
}
