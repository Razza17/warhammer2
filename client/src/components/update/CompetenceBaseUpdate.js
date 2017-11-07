import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { updateCompBase } from "../../actions/CompBaseAction";

class CompetenceBaseUpdate extends Component {

    handleUpdate() {
        let _id = this.props._id;
        let compBase = {
            _id:_id,
            nom: findDOMNode(this.refs.nomCompBase).value,
            carac: findDOMNode(this.refs.caracCompBase).value,
            acquis: findDOMNode(this.refs.acquisCompBase),
            dix: findDOMNode(this.refs.dixCompBase),
            vingt: findDOMNode(this.refs.vingtCompBase),
            bonus: findDOMNode(this.refs.bonusCompBase).value
        };
        console.log(compBase);
        //this.props.updateCompBase(_id, compBase);
        //this.props.getCompBase();
    }

    render() {
        return (
            <tr>
                <td>
                    <FormGroup controlId="nomCompBase">
                        <FormControl
                            type='text'
                            defaultValue={this.props.nom}
                            ref='nomCompBase' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="caracCompBase">
                        <FormControl
                            type='text'
                            value={this.props.carac}
                            ref='caracCompBase' />
                    </FormGroup>
                </td>
                <td>
                    {this.props.acquis ? <Glyphicon glyph="ok" /> : <Checkbox ref='acquisCompBase' />}
                </td>
                <td>
                    {this.props.dix ? <Glyphicon glyph="ok" /> : <Checkbox ref='dixCompBase' />}
                </td>
                <td>
                    {this.props.vingt ? <Glyphicon glyph="ok" /> : <Checkbox ref='vingtCompBase' />}
                </td>
                <td>
                    <FormGroup controlId="bonusCompBase">
                        <FormControl
                            type='text'
                            defaultValue={this.props.bonus}
                            ref='bonusCompBase' />
                    </FormGroup>
                </td>
                <td>
                    {this.props.carac === '(F)' && this.props.acquis && this.props.caracActuel[0].f + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(F)' && !this.props.acquis && Math.round(this.props.caracActuel[0].f / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(Soc)' && this.props.acquis && this.props.caracActuel[0].soc + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(Soc)' && !this.props.acquis && Math.round(this.props.caracActuel[0].soc / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(Ag)' && this.props.acquis && this.props.caracActuel[0].ag + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(Ag)' && !this.props.acquis && Math.round(this.props.caracActuel[0].ag / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(Int)' && this.props.acquis && this.props.caracActuel[0].int + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(Int)' && !this.props.acquis && Math.round(this.props.caracActuel[0].int / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                    {this.props.carac === '(E)' && this.props.acquis && this.props.caracActuel[0].e + this.props.dix + this.props.vingt + this.props.bonus}
                    {this.props.carac === '(E)' && !this.props.acquis && Math.round(this.props.caracActuel[0].e / 2 + this.props.dix + this.props.vingt + this.props.bonus)}
                </td>
                <td>
                    <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCompBase:updateCompBase
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetenceBaseUpdate);
