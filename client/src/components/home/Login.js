import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
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
      redirectToReferrer: false,
      visible: false
    }
  }

  handleLogin() {
    let formPseudo = findDOMNode(this.refs.pseudo).value;
    let formPassword = findDOMNode(this.refs.password).value;
    let users = this.props.user.length && this.props.user.map((user) => {
      return formPseudo === user.pseudo && formPassword === user.password
    });
    console.log(users);
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    })
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state.redirectToReferrer;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <Col xs={6} xsOffset={3}>
        <h1 className="align-center">Connecte toi</h1>
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
        <Alert className={this.state.visible ? "showNav" : "hideNav"} bsStyle="danger">
          Ton pseudo et/ou ton mot de passe ne sont pas correct !!!!
        </Alert>
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
