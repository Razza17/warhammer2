import React, { Component } from 'react';

export class CaracActuelS extends Component {
    render() {
        return (
            <tr className="text-center">
                <td className="black">Ac</td>
                <td>{this.props.a}</td>
                <td>{this.props.b}</td>
                <td>{this.props.bf}</td>
                <td>{this.props.be}</td>
                <td>{this.props.m}</td>
                <td>{this.props.mag}</td>
                <td>{this.props.pf}</td>
                <td>{this.props.pd}</td>
            </tr>
        )
    }
}
