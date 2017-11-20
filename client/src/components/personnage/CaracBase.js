import React, { Component } from 'react';

export class CaracBase extends Component {
    render() {
        return (
            <tr>
                <td className="black">Base</td>
                <td>{this.props.cc}</td>
                <td>{this.props.ct}</td>
                <td>{this.props.f}</td>
                <td>{this.props.e}</td>
                <td>{this.props.ag}</td>
                <td>{this.props.int}</td>
                <td>{this.props.fm}</td>
                <td>{this.props.soc}</td>
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