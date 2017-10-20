import React, { Component } from 'react';

export class CaracBaseP extends Component {
    render() {
        return (
            <tr className="text-center">
                <td className="black">B</td>
                <td>{this.props.cc}</td>
                <td>{this.props.ct}</td>
                <td>{this.props.f}</td>
                <td>{this.props.e}</td>
                <td>{this.props.ag}</td>
                <td>{this.props.int}</td>
                <td>{this.props.fm}</td>
                <td>{this.props.soc}</td>
            </tr>
        )
    }
}
