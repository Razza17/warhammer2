import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import store from '../../index.js';

import { getUser } from '../../actions/UserAction.js';

class Login extends Component {

  constructor(props) {
    super(props);

    let config = {
      apiKey: "AIzaSyCXSmiyYCqx8LWXeC16RoBFo-j0Kvlnx-Q",
      authDomain: "warhammer-81ced.firebaseapp.com",
      databaseURL: "https://warhammer-81ced.firebaseio.com",
      projectId: "warhammer-81ced",
      storageBucket: "warhammer-81ced.appspot.com",
      messagingSenderId: "1046515260577"
    };
    firebase.initializeApp(config);

    this.state = {
      visible: false,
      msg: ""
    }
  }

  handleLogin() {
    let reactThis = this;
    let that = this.props;
    let reduxStore = {store}.store;
    let pseudo = "";

    firebase.auth().signInWithEmailAndPassword(findDOMNode(this.refs.email).value,findDOMNode(this.refs.password).value,)
    .then(function(onResolve) {
      let response = [onResolve.user.email];
      that.getUser(response[0]);
      reduxStore.subscribe(() => {
        pseudo = reduxStore.getState().user.user[0].pseudo;
        window.location.assign('./choosePerso?pseudo='+pseudo);
      });
    })
    .catch(function(err) {
      let errorMessage = err.message;

      reactThis.setState({
        visible: !reactThis.state.visible,
        msg: errorMessage
      })

      setTimeout(function() {
        reactThis.setState({
          visible: !reactThis.state.visible
        })
      }, 3000)
    });
  }

  render() {
    return (
      <Col xs={6} xsOffset={3}>
        <h1 className="align-center">Connecte toi</h1>
        <FormGroup controlId="email">
          <FormControl
            type='email'
            placeholder="Entre ton email"
            ref='email' />
        </FormGroup>
        <FormGroup controlId="password">
          <FormControl
            type='password'
            placeholder="Entre ton mot de passe"
            ref='password' />
        </FormGroup>
        <Button onClick={this.handleLogin.bind(this)}>Submit</Button>
        <Alert className={this.state.visible ? "showNav" : "hideNav"} bsStyle="danger">
          {this.state.msg}
        </Alert>
      </Col>
    )
  }
}

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
