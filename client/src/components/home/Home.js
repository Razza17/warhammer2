import React, { Component } from 'react';
import { Row, Col, Panel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { getUser } from "../../actions/UserAction";

class Home extends Component {

    componentWillMount() {
        this.props.getUser();
    }

    constructor() {
        super();

        this.state = {
            redirectToReferrer: false
        }
    }

    handleLogin() {
        let formPseudo = findDOMNode(this.refs.pseudo).value;
        let formPassword = findDOMNode(this.refs.password).value;
        let pseudo = this.props.user[0].pseudo;
        let password = this.props.user[0].password;

        formPseudo === pseudo && formPassword === password ?
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: true });
            }) :
            alert("Ton pseudo ou ton mot de passe sont incorrect");
    }

    render() {

        const Name = this.props.profile.length ? "Welcome Warrior " + this.props.profile[0].nom : "Welcome Warrior";

        return (
            <Row>
                <Col xs={12}>
                    <h1 className="align-center">{Name}</h1>
                </Col>
                <Col xs={6}>
                    <Panel>
                        <h1 className="align-center">Se connecter</h1>
                        <FormGroup controlId="pseudo">
                            <FormControl
                                type='text'
                                placeholder="Entre ton pseudo"
                                ref='pseudo' />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormControl
                                type='password'
                                placeholder="Entre ton mot de passe"
                                ref='password' />
                        </FormGroup>
                        <Button onClick={this.handleLogin.bind(this)}>Envoyer</Button>
                    </Panel>
                </Col>
                <Col xs={6}>
                    <Panel>
                        <h1 className="align-center">Création de compte</h1>
                        <FormGroup controlId="nom">
                            <FormControl
                                type='text'
                                placeholder="Entre ton prénom et ton nom"
                                ref='nom' />
                        </FormGroup>
                        <FormGroup controlId="pseudo">
                            <FormControl
                                type='text'
                                placeholder="Entre ton pseudo"
                                ref='pseudo' />
                        </FormGroup>
                        <FormGroup controlId="email">
                            <FormControl
                                type='text'
                                placeholder="Entre ton email"
                                ref='email' />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormControl
                                type='password'
                                placeholder="Entre ton mot de passe"
                                ref='password' />
                        </FormGroup>
                        <FormGroup controlId="confirmPassword">
                            <FormControl
                                type='password'
                                placeholder="Confirme ton mot de passe"
                                ref='confirmPassword' />
                        </FormGroup>
                        <Button>Envoyer</Button>
                    </Panel>
                </Col>
            </Row>
        )
    }
}

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100)
    },
};

function mapStateToProps(state){
    return {
        user: state.user.user,
        profile: state.profile.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);