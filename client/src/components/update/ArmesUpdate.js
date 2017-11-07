import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteArme, updateArme } from "../../actions/ArmeAction";

class ArmesUpdate extends Component {

    handleDelete(){
        let _id = this.props._id;
        this.props.deleteArme(_id);
    }

    handleUpdate() {
        let _id = this.props._id;
        let arme = {
            _id:_id,
            nom: findDOMNode(this.refs.nomArme).value,
            encombrement: findDOMNode(this.refs.encombrementArme).value,
            degats: findDOMNode(this.refs.degatsArme).value,
            portee: findDOMNode(this.refs.porteeArme).value,
            rechargement: findDOMNode(this.refs.rechargementArme).value,
            attributs: findDOMNode(this.refs.attributsArme).value
        };
        this.props.updateArme(_id, arme);
        this.props.getArme();
    }


    render() {
        return (
            <tr>
                <td>
                    <FormGroup controlId="nomArme">
                        <FormControl
                            type='text'
                            defaultValue={this.props.nom}
                            ref='nomArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="encombrementArme">
                        <FormControl
                            type='text'
                            defaultValue={this.props.encombrement}
                            ref='encombrementArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="degatsArme">
                        <FormControl
                            type='text'
                            defaultValue={this.props.degats}
                            ref='degatsArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="porteeArme">
                        <FormControl
                            type='text'
                            defaultValue={this.props.portee}
                            ref='porteeArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="rechargementArme">
                        <FormControl
                            type='text'
                            defaultValue={this.props.rechargement !== undefined ? this.props.rechargement : 0}
                            ref='rechargementArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="attributsArme">
                        <FormControl
                            type='text'
                            defaultValue={this.props.attributs}
                            ref='attributsArme' />
                    </FormGroup>
                </td>
                <td>
                    <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />&nbsp;&nbsp;<Glyphicon glyph="remove" onClick={this.handleDelete.bind(this)} />
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteArme: deleteArme,
        updateArme:updateArme
    }, dispatch)
}

export default connect("", mapDispatchToProps)(ArmesUpdate);
