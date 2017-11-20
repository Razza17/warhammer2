import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class Competence extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td>{this.props.carac}</td>
                <td>{this.props.acquis && <Glyphicon glyph="ok" />}</td>
                <td>{this.props.dix && <Glyphicon glyph="ok" />}</td>
                <td>{this.props.vingt && <Glyphicon glyph="ok" />}</td>
                <td>{this.props.bonus}</td>
                <td>
                    {this.props.carac === '(F)' && (this.props.acquis ? this.props.caracActuel[0].f : Math.round(this.props.caracActuel[0].f / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(Soc)' && (this.props.acquis ? this.props.caracActuel[0].soc : Math.round(this.props.caracActuel[0].soc / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(Ag)' && (this.props.acquis ? this.props.caracActuel[0].ag : Math.round(this.props.caracActuel[0].ag / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(Int)' && (this.props.acquis ? this.props.caracActuel[0].int : Math.round(this.props.caracActuel[0].int / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(E)' && (this.props.acquis ? this.props.caracActuel[0].e : Math.round(this.props.caracActuel[0].e / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                </td>
            </tr>
        );
    }
}

function mapStateToProps(state) {
    return {
        caracActuel: state.caracActuel.caracActuel
    }
}

export default connect(mapStateToProps)(Competence);
