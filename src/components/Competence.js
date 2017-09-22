import React, { Component } from 'react';

import Wolfgang from '../data/Wolfgang.json';
import imgChecked from '../img/checked.png';

export class Competence extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td className="text-center">{this.props.carac}</td>
                <td className="text-center">{this.props.acquis && <img src={imgChecked} alt="Checked" />}</td>
                <td className="text-center">{this.props.dix}</td>
                <td className="text-center">{this.props.vingt}</td>
                <td className="text-center">{this.props.bonus}</td>
                <td className="text-center">
                    {this.props.carac === '(F)' && this.props.acquis && Wolfgang.actuel[0].f + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(F)' && !this.props.acquis && Math.round(Wolfgang.actuel[0].f / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(Soc)' && this.props.acquis && Wolfgang.actuel[0].soc + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(Soc)' && !this.props.acquis && Math.round(Wolfgang.actuel[0].soc / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(Ag)' && this.props.acquis && Wolfgang.actuel[0].ag + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(Ag)' && !this.props.acquis && Math.round(Wolfgang.actuel[0].ag / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(Int)' && this.props.acquis && Wolfgang.actuel[0].int + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(Int)' && !this.props.acquis && Math.round(Wolfgang.actuel[0].int / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(E)' && this.props.acquis && Wolfgang.actuel[0].e + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(E)' && !this.props.acquis && Math.round(Wolfgang.actuel[0].e / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                </td>
            </tr>
        );
    }
}