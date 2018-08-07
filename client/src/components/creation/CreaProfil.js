import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, InputGroup, Button, PanelGroup, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postProfile, getProfile } from "../../actions/ProfilAction";
import { postDetails } from "../../actions/DetailAction";
import { postPerso } from "../../actions/PersoAction";

class CreaProfil extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];

    this.state = {
      user: user,
      activeKey: "1",
      profileNom: null,
      profileRace: null,
      profileCarriereA: null,
      profileAcarriere: null,
      profileFormValidate: false,
      detailAge: null,
      detailYeux: null,
      detailTaille: null,
      detailCheveux: null,
      detailPoids: null,
      detailSigne: null,
      detailFraterie: null,
      detailNaissance: null,
      detailDistinction: null,
      detailsFormValidate: false
    }
  }

  postProfile() {
    let profileNom = findDOMNode(this.refs.profileNom).value;
    let profileRace = findDOMNode(this.refs.profileRace).value;
    let profileCarriereA = findDOMNode(this.refs.profileCarriereA).value;
    let profileAcarriere = findDOMNode(this.refs.profileAcarriere).value;
    let profile = {
      nom:profileNom,
      race:profileRace,
      carriereA:profileCarriereA,
      Acarriere:profileAcarriere,
      user:this.state.user,
      perso:profileNom
    };
    let perso = {
      nom:profileNom,
      user:this.state.user
    }
    if(this.state.profileNom === "success" && this.state.profileRace === "success" && this.state.profileCarriereA === "success"
    && this.state.profileAcarriere === "success") {
      this.props.postProfile(profile);
      this.props.postPerso(perso);
      // Plier le Panel en cours et déplier le Panel suivant
      let stateActiveKey = parseInt(this.state.activeKey, 10);
      let newActiveKey = stateActiveKey + 1;
      let string = newActiveKey.toString();
      this.setState({ activeKey: string, profileFormValidate: true });
      let urlParams = window.location.search;
      window.history.pushState(null, null, urlParams + "&perso=" + profileNom);
    } else {
      this.state.profileNom === null && this.setState({ profileNom: "error" });
      this.state.profileRace === null && this.setState({ profileRace: "error" });
      this.state.profileCarriereA === null && this.setState({ profileCarriereA: "error" });
      this.state.profileAcarriere === null && this.setState({ profileAcarriere: "error" });
      alert("Tu dois remplir tous les champs guerrier !");
    }
  }

  postDetails() {
    let splitUrl = window.location.search.substring(1).split('=');
    let perso = splitUrl[2];
    let detailAge = findDOMNode(this.refs.detailAge).value;
    let detailSexe = findDOMNode(this.refs.detailSexe).value;
    let detailYeux = findDOMNode(this.refs.detailYeux).value;
    let detailTaille = findDOMNode(this.refs.detailTaille).value;
    let detailCheveux = findDOMNode(this.refs.detailCheveux).value;
    let detailPoids = findDOMNode(this.refs.detailPoids).value;
    let detailSigne = findDOMNode(this.refs.detailSigne).value;
    let detailFraterie = findDOMNode(this.refs.detailFraterie).value;
    let detailNaissance = findDOMNode(this.refs.detailNaissance).value;
    let detailDistinction = findDOMNode(this.refs.detailDistinction).value;
    let details = {
      age: detailAge,
      sexe: detailSexe,
      yeux: detailYeux,
      taille: detailTaille,
      cheveux: detailCheveux,
      poids: detailPoids,
      signeAstral: detailSigne,
      fraterie: detailFraterie,
      naissance: detailNaissance,
      distinction: detailDistinction,
      user:this.state.user,
      perso: perso
    };

    if(this.state.detailAge === "success" && this.state.detailYeux === "success"
    && this.state.detailTaille === "success" && this.state.detailCheveux === "success" && this.state.detailPoids === "success"
    && this.state.detailSigne === "success" && this.state.detailFraterie === "success" && this.state.detailNaissance === "success"
    && this.state.detailDistinction === "success") {
      this.props.postDetails(details);
      // Plier le Panel en court et déplier le Panel suivant
      let stateActiveKey = parseInt(this.state.activeKey, 10);
      let newActiveKey = stateActiveKey + 1;
      let string = newActiveKey.toString();
      this.setState({ activeKey: string, detailsFormValidate: true });
      window.location.assign(window.location.origin + "/creationCarac" + window.location.search);
    } else {
      this.state.detailAge === null && this.setState({ detailAge: "error" });
      this.state.detailYeux === null && this.setState({ detailYeux: "error" });
      this.state.detailTaille === null && this.setState({ detailTaille: "error" });
      this.state.detailCheveux === null && this.setState({ detailCheveux: "error" });
      this.state.detailPoids === null && this.setState({ detailPoids: "error" });
      this.state.detailSigne === null && this.setState({ detailSigne: "error" });
      this.state.detailFraterie === null && this.setState({ detailFraterie: "error" });
      this.state.detailNaissance === null && this.setState({ detailNaissance: "error" });
      this.state.detailDistinction === null && this.setState({ detailDistinction: "error" });
      alert("Tu dois remplir tous les champs guerrier !");
    }
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    value !== "" ? this.setState({ [name]: "success" }) : this.setState({ [name]: "error" });
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
      <Col xs={12} md={4} mdOffset={4}>
        <h2 className="text-center uppercase">{this.state.activeKey === "1" ? "Profil de ton personnage" : "Détails de ton personnage"}</h2>
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1">
            <Form>
              <FormGroup controlId="profileNom" validationState={this.state.profileNom}>
                <InputGroup>
                  <InputGroup.Addon>Nom :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileNom"
                    placeholder="Entre le nom du personnage"
                    ref='profileNom'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="profileRace" validationState={this.state.profileRace}>
                <InputGroup>
                  <InputGroup.Addon>Race :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileRace"
                    placeholder="Entre la race de ton personnage"
                    ref='profileRace'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="profileCarriereA" validationState={this.state.profileCarriereA}>
                <InputGroup>
                  <InputGroup.Addon>Carrière acrtuelle :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileCarriereA"
                    placeholder="Carrière acrtuelle de ton personnage"
                    ref='profileCarriereA'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="profileAcarriere" validationState={this.state.profileAcarriere}>
                <InputGroup>
                  <InputGroup.Addon>Ancienne carrière :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileAcarriere"
                    placeholder="Ancienne carrière de ton personnage"
                    ref='profileAcarriere'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              {this.state.profileFormValidate ? <Button disabled>Enregistrer</Button> : <Button onClick={this.postProfile.bind(this)}>Enregistrer</Button>}
            </Form>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2">
            <Form>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailAge" validationState={this.state.detailAge}>
                  <InputGroup>
                    <InputGroup.Addon>Age :</InputGroup.Addon>
                    <FormControl
                      type='number'
                      name='detailAge'
                      placeholder="Entre l'âge du personnage"
                      ref='detailAge'
                      onChange={this.onChange.bind(this)}
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailSexe" validationState={this.state.detailSexe}>
                  <InputGroup>
                    <InputGroup.Addon>Sexe :</InputGroup.Addon>
                    <FormControl
                      componentClass='select'
                      name='detailSexe'
                      ref='detailSexe'>
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </FormControl>
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailYeux" validationState={this.state.detailYeux}>
                  <InputGroup>
                    <InputGroup.Addon>Yeux :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailYeux'
                      placeholder="Couleur des yeux"
                      ref='detailYeux'
                      onChange={this.onChange.bind(this)}
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailTaille" validationState={this.state.detailTaille}>
                  <InputGroup>
                    <InputGroup.Addon>Taille :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailTaille'
                      placeholder="La taille (en cm)"
                      ref='detailTaille'
                      onChange={this.onChange.bind(this)}
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailCheveux" validationState={this.state.detailCheveux}>
                  <InputGroup>
                    <InputGroup.Addon>Cheveux :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailCheveux'
                      placeholder="Couleur des cheveux"
                      ref='detailCheveux'
                      onChange={this.onChange.bind(this)}
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="detailPoids" validationState={this.state.detailPoids}>
                  <InputGroup>
                    <InputGroup.Addon>Poids :</InputGroup.Addon>
                    <FormControl
                      type='text'
                      name='detailPoids'
                      placeholder="Le poids (en kg)"
                      ref='detailPoids'
                      onChange={this.onChange.bind(this)}
                      />
                    <FormControl.Feedback/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <FormGroup controlId="detailSigne" validationState={this.state.detailSigne}>
                <InputGroup>
                  <InputGroup.Addon>Signe astral :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailSigne'
                    placeholder="Le signe astral de ton personnage"
                    ref='detailSigne'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="detailFraterie" validationState={this.state.detailFraterie}>
                <InputGroup>
                  <InputGroup.Addon>Fraterie :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailFraterie'
                    placeholder="Combien de frère(s) et soeur(s) a ton personnage"
                    ref='detailFraterie'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="detailNaissance" validationState={this.state.detailNaissance}>
                <InputGroup>
                  <InputGroup.Addon>Naissance :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailNaissance'
                    placeholder="Le lieu de naissance de ton personnage"
                    ref='detailNaissance'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="detailDistinction" validationState={this.state.detailDistinction}>
                <InputGroup>
                  <InputGroup.Addon>Distinction :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name='detailDistinction'
                    placeholder="La distinction de ton personnage"
                    ref='detailDistinction'
                    onChange={this.onChange.bind(this)}
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              {this.state.detailsFormValidate ? <Button disabled>Enregistrer</Button> : <Button onClick={this.postDetails.bind(this)}>Enregistrer</Button>}
            </Form>
          </Panel>
        </PanelGroup>
      </Col>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postProfile, getProfile,
    postDetails,
    postPerso
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaProfil);
