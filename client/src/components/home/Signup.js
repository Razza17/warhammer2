import React, { Component } from 'react';
import { Grid, Col, FormGroup, FormControl, Button, PanelGroup, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
// import firebase from 'firebase/app';

import { postLogup } from "../../actions/LogupAction";

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeKey: "0",
      errorMsg: ""
    }
  }

  handleLogup() {
    let password = findDOMNode(this.refs.password).value;
    let confirmPassword = findDOMNode(this.refs.confirmPassword).value;
    let pseudo = findDOMNode(this.refs.pseudo).value;
    let email = findDOMNode(this.refs.email).value;
    let prenom  = findDOMNode(this.refs.prenom).value;
    let nom = findDOMNode(this.refs.nom).value;
    let user = {
      nom:nom,
      prenom:prenom,
      pseudo:pseudo,
      email:email,
      password:password,
    };

    if(password === confirmPassword && password !== "" && confirmPassword !== "") {
      // let config = {
      //   apiKey: "AIzaSyCXSmiyYCqx8LWXeC16RoBFo-j0Kvlnx-Q",
      //   authDomain: "warhammer-81ced.firebaseapp.com",
      //   databaseURL: "https://warhammer-81ced.firebaseio.com",
      //   projectId: "warhammer-81ced",
      //   storageBucket: "warhammer-81ced.appspot.com",
      //   messagingSenderId: "1046515260577"
      // };
      // firebase.initializeApp(config);
      //
      // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      //   let errorCode = error.code;
      //   let errorMessage = error.message;
      //   this.setState({ activeKey: "1", errorMsg: errorCode + " : " + errorMessage });
      // });
      this.props.postLogup(user);
      let redirect = "/creationProfile?pseudo=" + pseudo;
      this.props.history.push(redirect);
    } else {
      this.setState({ activeKey: "1", errorMsg: "Tes deux mots de passe ne correspondent pas ou sont vides !" });
    }
  }

  render() {
    return (
      <Grid id="logup" className="vertical-middle" fluid>
        <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
          <PanelGroup id="logup-panel-group">
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h2">Créer ton compte</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <FormGroup controlId="nom">
                    <FormControl
                      type='text'
                      placeholder="Entre ton nom"
                      ref='nom' />
                </FormGroup>
                <FormGroup controlId="prenom">
                    <FormControl
                      type='text'
                      placeholder="Entre ton prénom"
                      ref='prenom' />
                </FormGroup>
                <FormGroup controlId="pseudo">
                    <FormControl
                      type='text'
                      placeholder="Entre ton pseudo"
                      ref='pseudo' />
                </FormGroup>
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
                <FormGroup controlId="confirmPassword">
                    <FormControl
                      type='password'
                      placeholder="Confirmation de ton mot de passe"
                      ref='confirmPassword' />
                </FormGroup>
                <Button onClick={this.handleLogup.bind(this)}>Envoyer</Button>
              </Panel.Body>
            </Panel>
            <Panel className={this.state.activeKey === "1" ? "loginMsg show" : "loginMsg hide"}>
              <p>{this.state.errorMsg}</p>
            </Panel>
          </PanelGroup>
        </Col>
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postLogup
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup);
