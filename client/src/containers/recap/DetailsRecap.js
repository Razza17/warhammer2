import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, InputGroup, Button, Panel, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { updateDetails, getDetails } from "../../actions/DetailAction";

class DetailsRecap extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      showAlert: false,
      alertStyle: "success",
      alertMessage: ""
    }
  }

  componentWillMount() {
    this.props.getDetails(this.state.user, this.state.perso);
  }

  updateDetails() {
    let id = findDOMNode(this.refs.detailsId).value;
    let newData = {
      age: findDOMNode(this.refs.detailAge).value,
      sexe: findDOMNode(this.refs.detailSexe).value,
      yeux: findDOMNode(this.refs.detailYeux).value,
      taille: findDOMNode(this.refs.detailTaille).value,
      cheveux: findDOMNode(this.refs.detailCheveux).value,
      poids: findDOMNode(this.refs.detailPoids).value,
      signeAstral: findDOMNode(this.refs.detailSigne).value,
      fraterie: findDOMNode(this.refs.detailFraterie).value,
      naissance: findDOMNode(this.refs.detailNaissance).value,
      distinction: findDOMNode(this.refs.detailDistinction).value
    };

    if (findDOMNode(this.refs.detailAge).value !== "" &&
        findDOMNode(this.refs.detailSexe).value !== "" &&
        findDOMNode(this.refs.detailYeux).value !== "" &&
        findDOMNode(this.refs.detailTaille).value !== "" &&
        findDOMNode(this.refs.detailCheveux).value !== "" &&
        findDOMNode(this.refs.detailPoids).value !== "" &&
        findDOMNode(this.refs.detailSigne).value !== "" &&
        findDOMNode(this.refs.detailFraterie).value !== "" &&
        findDOMNode(this.refs.detailNaissance).value !== "" &&
        findDOMNode(this.refs.detailDistinction).value !== "") {
      this.props.updateDetails(id, newData);
      this.props.getDetails(this.state.user, this.state.perso);

      this.setState({
        showAlert: true,
        alertStyle: "success",
        alertMessage: "Your Profile has been successfully updated"
      })

      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2500);
    } else {
      this.setState({
        showAlert: true,
        alertStyle: "danger",
        alertMessage: "Oups something went wrong ! Maybe try again ;-)"
      })

      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2500);
    }
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Détails</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {this.props.details.map((detail, i) =>
            <Form key={i}>
              <FormGroup className="hide" controlId="detailsId">
                <InputGroup>
                  <InputGroup.Addon>Id :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="detailsId"
                    defaultValue={detail._id}
                    ref='detailsId'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailAge">
                  <InputGroup>
                    <InputGroup.Addon>Age :</InputGroup.Addon>
                    <FormControl
                      type='number'
                      name='detailAge'
                      defaultValue={detail.age}
                      ref='detailAge'
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailSexe">
                  <InputGroup>
                    <InputGroup.Addon>Sexe :</InputGroup.Addon>
                    <FormControl
                      componentClass='select'
                      name='detailSexe'
                      ref='detailSexe'>
                      <option value={detail.sexe}>{detail.sexe}</option>
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </FormControl>
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailYeux">
                  <InputGroup>
                    <InputGroup.Addon>Yeux :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailYeux'
                      defaultValue={detail.yeux}
                      ref='detailYeux'
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailTaille">
                  <InputGroup>
                    <InputGroup.Addon>Taille :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailTaille'
                      defaultValue={detail.taille}
                      ref='detailTaille'
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailCheveux">
                  <InputGroup>
                    <InputGroup.Addon>Cheveux :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailCheveux'
                      defaultValue={detail.cheveux}
                      ref='detailCheveux'
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailPoids">
                  <InputGroup>
                    <InputGroup.Addon>Poids :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailPoids'
                      defaultValue={detail.poids}
                      ref='detailPoids'
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <FormGroup controlId="detailSigne">
                <InputGroup>
                  <InputGroup.Addon>Signe astral :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailSigne'
                    defaultValue={detail.signeAstral}
                    ref='detailSigne'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="detailFraterie">
                <InputGroup>
                  <InputGroup.Addon>Fraterie :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailFraterie'
                    defaultValue={detail.fraterie}
                    ref='detailFraterie'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="detailNaissance">
                <InputGroup>
                  <InputGroup.Addon>Naissance :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailNaissance'
                    defaultValue={detail.naissance}
                    ref='detailNaissance'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="detailDistinction">
                <InputGroup>
                  <InputGroup.Addon>Distinction :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailDistinction'
                    defaultValue={detail.distinction}
                    ref='detailDistinction'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <Button onClick={this.updateDetails.bind(this)}>Modifier</Button>
              <Alert className={this.state.showAlert === true ? "show" : "hide"} bsStyle={this.state.alertStyle}>
                {this.state.alertMessage}
              </Alert>
            </Form>
          )}
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    details: state.details.details
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateDetails, getDetails
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsRecap);
