import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteArme, updateArme } from "../../actions/ArmeAction";

class ArmesUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom: this.props.nom,
            encombrement: this.props.encombrement,
            degats: this.props.degats,
            portee: this.props.portee,
            rechargement: this.props.rechargement,
            attributs: this.props.attributs
        }
    }

    handleDelete(){
        let _id = this.props._id;
        this.props.deleteArme(_id);
        this.handleChangeArme();
    }

    handleChangeArme() {
        let armeData = this.props.arme.map((newArmes) => {return {...newArmes}});
        for(let j = 0; j < armeData.length; j++) {
            this.setState({
                nom: armeData[j].nom,
                encombrement: armeData[j].encombrement,
                degats: armeData[j].degats,
                portee: armeData[j].portee,
                rechargement: armeData[j].rechargement,
                attributs: armeData[j].attributs
            })
        }
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
                            defaultValue={this.state.nom}
                            ref='nomArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="encombrementArme">
                        <FormControl
                            type='text'
                            defaultValue={this.state.encombrement}
                            ref='encombrementArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="degatsArme">
                        <FormControl
                            type='text'
                            defaultValue={this.state.degats}
                            ref='degatsArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="porteeArme">
                        <FormControl
                            type='text'
                            defaultValue={this.state.portee}
                            ref='porteeArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="rechargementArme">
                        <FormControl
                            type='text'
                            defaultValue={this.state.rechargement !== undefined ? this.state.rechargement : 0}
                            ref='rechargementArme' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="attributsArme">
                        <FormControl
                            type='text'
                            defaultValue={this.state.attributs}
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

function mapStateToProps(state) {
    return {
        arme: state.arme.arme
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteArme,
        updateArme
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmesUpdate);
