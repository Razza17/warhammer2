import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteInventaire, updateInventaire } from "../../actions/InventaireAction";

class InventaireUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom: this.props.nom,
            quantite: this.props.quantite,
            encombrement: this.props.encombrement
        }
    }

    handleDelete(){
        let _id = this.props._id;
        this.props.deleteInventaire(_id);
        this.props.getInventaire();
    }

    /*handleRemove (i) {
        let that = this;
        console.log('removing row:',i);
        _.forEach(this.state, function (val, colName) {
            that.state[colName].splice(i,1);
        });
        console.log(this.state);
        this.setState(this.state);
    }*/

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
                            defaultValue={this.state.nom}
                            ref='nomInventaire' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="quantiteInventaire">
                        <FormControl
                            type='text'
                            defaultValue={this.state.quantite}
                            ref='quantiteInventaire' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="encombrementInventaire">
                        <FormControl
                            type='text'
                            defaultValue={this.state.encombrement}
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
