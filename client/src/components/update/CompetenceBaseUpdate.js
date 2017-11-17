import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { updateCompBase } from "../../actions/CompBaseAction";

class CompetenceBaseUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            acquisCheck: this.props.acquis,
            dixCheck: this.props.dix,
            vingtCheck: this.props.vingt
        }
    }

    changeAcquis() {
        this.setState({
            acquisCheck: !this.state.acquisCheck
        })
    }

    changeDix() {
        this.setState({
            dixCheck: !this.state.dixCheck
        })
    }

    changeVingt() {
        this.setState({
            vingtCheck: !this.state.vingtCheck
        })
    }

    handleUpdate() {
        let _id = this.props._id;
        let compBase = {
            _id:_id,
            acquis: this.state.acquisCheck,
            dix: this.state.dixCheck,
            vingt: this.state.vingtCheck,
            bonus: findDOMNode(this.refs.bonusCompBase).value
        };
        this.props.updateCompBase(_id, compBase);
        this.props.getCompBase();
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.nom}
                </td>
                <td>
                    {this.props.carac}
                </td>
                <td>
                    <Checkbox checked={this.state.acquisCheck} onChange={this.changeAcquis.bind(this)} />
                </td>
                <td>
                    <Checkbox checked={this.state.dixCheck} onChange={this.changeDix.bind(this)} />
                </td>
                <td>
                    <Checkbox checked={this.state.vingtCheck} onChange={this.changeVingt.bind(this)} />
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
                    {this.props.carac === '(F)' && (this.props.acquis ? this.props.caracActuel[0].f : Math.round(this.props.caracActuel[0].f / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(Soc)' && (this.props.acquis ? this.props.caracActuel[0].soc : Math.round(this.props.caracActuel[0].soc / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(Ag)' && (this.props.acquis ? this.props.caracActuel[0].ag : Math.round(this.props.caracActuel[0].ag / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(Int)' && (this.props.acquis ? this.props.caracActuel[0].int : Math.round(this.props.caracActuel[0].int / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
                    {this.props.carac === '(E)' && (this.props.acquis ? this.props.caracActuel[0].e : Math.round(this.props.caracActuel[0].e / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
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
        updateCompBase
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetenceBaseUpdate);
