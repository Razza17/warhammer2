import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getUser } from "../../actions/UserAction";

class Login extends Component {

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

        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <Col xs={6} xsOffset={3}>
                <h1 className="align-center">Login Page</h1>
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
                <Button onClick={this.handleLogin.bind(this)}>Submit</Button>
            </Col>
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
        user: state.user.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);