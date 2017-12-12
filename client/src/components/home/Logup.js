import React, { Component } from 'react';
import { Col, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postLogup } from "../../actions/LogupAction";

class Logup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    handleLogup() {
        let user = {
            nom:findDOMNode(this.refs.nom).value,
            pseudo:findDOMNode(this.refs.pseudo).value,
            email:findDOMNode(this.refs.email).value,
            password:findDOMNode(this.refs.password).value,
        };
        let password = findDOMNode(this.refs.password).value;
        let confirmPassword = findDOMNode(this.refs.confirmPassword).value;
        let pseudo = findDOMNode(this.refs.pseudo).value;

        if(password === confirmPassword && password !== "" && confirmPassword !== "") {
            this.props.postLogup(user);
            this.setState({redirect:true});
            let redirect = "/creation?pseudo=" + pseudo;
            this.props.history.push(redirect);
        } else {
            alert("Tes deux mots de passe ne correspondent pas ou sont vides !");
        }
    }

    render() {
        return (
            <Col xs={6} xsOffset={3}>
                <h1 className="align-center">Créer ton compte</h1>
                <FormGroup controlId="nom">
                    <InputGroup>
                        <InputGroup.Addon>Nom :</InputGroup.Addon>
                        <FormControl
                            type='text'
                            placeholder="Entre ton nom"
                            ref='nom' />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="pseudo">
                    <InputGroup>
                        <InputGroup.Addon>Pseudo :</InputGroup.Addon>
                        <FormControl
                            type='text'
                            placeholder="Entre ton pseudo"
                            ref='pseudo' />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="email">
                    <InputGroup>
                        <InputGroup.Addon>Email :</InputGroup.Addon>
                        <FormControl
                            type='email'
                            placeholder="Entre ton email"
                            ref='email' />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="password">
                    <InputGroup>
                        <InputGroup.Addon>Mot de passe :</InputGroup.Addon>
                        <FormControl
                            type='password'
                            placeholder="Entre ton mot de passe"
                            ref='password' />
                    </InputGroup>
                </FormGroup>
                <FormGroup controlId="confirmPassword">
                    <InputGroup>
                        <InputGroup.Addon>Confirmation :</InputGroup.Addon>
                        <FormControl
                            type='password'
                            placeholder="Confirmation de ton mot de passe"
                            ref='confirmPassword' />
                    </InputGroup>
                </FormGroup>
                <Button onClick={this.handleLogup.bind(this)}>Envoyer</Button>
            </Col>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postLogup
    }, dispatch)
}

export default connect("", mapDispatchToProps)(Logup);