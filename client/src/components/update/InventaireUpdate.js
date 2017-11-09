import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteInventaire, updateInventaire } from "../../actions/InventaireAction";

class InventaireUpdate extends Component {

    handleDelete(){
        let _id = this.props._id;
        this.props.deleteInventaire(_id);
        this.props.getInventaire();
        this.forceUpdate();
    }

    handleUpdate() {
        let _id = this.props._id;
        let inventaire = {
            _id:_id,
            nom: findDOMNode(this.refs.nomInventaire).value,
            quantite: findDOMNode(this.refs.quantiteInventaire).value,
            encombrement: findDOMNode(this.refs.encombrementInventaire).value
        };
        this.props.updateInventaire(_id, inventaire);
        this.props.getInventaire();
    }


    render() {
        return (
            <tr>
                <td>
                    <FormGroup controlId="nomInventaire">
                        <FormControl
                            type='text'
                            defaultValue={this.props.nom}
                            ref='nomInventaire' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="quantiteInventaire">
                        <FormControl
                            type='text'
                            defaultValue={this.props.quantite}
                            ref='quantiteInventaire' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="encombrementInventaire">
                        <FormControl
                            type='text'
                            defaultValue={this.props.encombrement}
                            ref='encombrementInventaire' />
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
        deleteInventaire: deleteInventaire,
        updateInventaire: updateInventaire
    }, dispatch)
}

export default connect("", mapDispatchToProps)(InventaireUpdate);
