import React, { Component } from 'react';
import { Well, FormGroup, FormControl, InputGroup, Button, Alert } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

export class ProfilUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            class : "hideMsg"
        };
    }

    handleUpdate() {
        let id = this.props._id;
        let newData = {
            nom: findDOMNode(this.refs.nom).value,
            race: findDOMNode(this.refs.race).value,
            carriereA: findDOMNode(this.refs.carriereA).value,
            Acarriere: findDOMNode(this.refs.Acarriere).value,
        };

        this.props.updateProfile(id, newData);

        this.setState({
            class : "showMsg"
        });

        setTimeout(() => {
            this.setState({class: "hideMsg"});
        }, 4000)
    }

    render() {
        return (
            <Well>
                <h3>Personnage</h3>
                <ul>
                    <li>
                        <FormGroup controlId="nom">
                            <InputGroup>
                                <InputGroup.Addon>Nom</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    value={this.props.nom}
                                    ref='nom' />
                            </InputGroup>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup controlId="race">
                            <InputGroup>
                                <InputGroup.Addon>Race</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    value={this.props.race}
                                    ref='race' />
                            </InputGroup>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup controlId="carriereA">
                            <InputGroup>
                                <InputGroup.Addon>Carrière Actuelle</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.carriereA}
                                    ref='carriereA' />
                            </InputGroup>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup controlId="Acarriere">
                            <InputGroup>
                                <InputGroup.Addon>Ancienne Carrière</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.Acarriere}
                                    ref='Acarriere' />
                            </InputGroup>
                        </FormGroup>
                    </li>
                    <li>
                        <Button bsStyle="primary" onClick={this.handleUpdate.bind(this)}>Update</Button>
                    </li>
                </ul>
                <Alert className={this.state.class} bsStyle="success">Your Profile has been successfully updated</Alert>
            </Well>
        )
    }
}
