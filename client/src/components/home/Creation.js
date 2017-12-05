import React, { Component } from 'react';
import { Col, FormGroup, FormControl, InputGroup, Button, PanelGroup, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postProfile } from "../../actions/ProfilAction";

class Creation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeKey: "1"
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
            Acarriere:profileAcarriere
        };
        this.props.postProfile(profile);
        this.setState({ activeKey: this.state.activeKey + 1 })
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        return (
            <Col xs={12}>
                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
                    <Panel eventKey="1" header="Profil de ton personnage">
                        <FormGroup controlId="profileNom">
                            <InputGroup>
                                <InputGroup.Addon>Nom :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Entre le nom du personnage"
                                    ref='profileNom' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="profileRace">
                            <InputGroup>
                                <InputGroup.Addon>Race :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Entre la race de ton personnage"
                                    ref='profileRace' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="profileCarriereA">
                            <InputGroup>
                                <InputGroup.Addon>Carrière acrtuelle :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Carrière acrtuelle de ton personnage"
                                    ref='profileCarriereA' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="profileAcarriere">
                            <InputGroup>
                                <InputGroup.Addon>Ancienne carrière :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Ancienne carrière de ton personnage"
                                    ref='profileAcarriere' />
                            </InputGroup>
                        </FormGroup>
                        <Button onClick={this.postProfile.bind(this)}>Envoyer</Button>
                    </Panel>

                    <Panel eventKey="2" header="Details de ton personnage">
                        <FormGroup controlId="detailAge">
                            <InputGroup>
                                <InputGroup.Addon>Age :</InputGroup.Addon>
                                <FormControl
                                    type='number'
                                    placeholder="Entre l'âge du personnage"
                                    ref='detailAge' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailSexe">
                            <InputGroup>
                                <InputGroup.Addon>Race :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Entre le sexe de ton personnage"
                                    ref='detailSexe' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailYeux">
                            <InputGroup>
                                <InputGroup.Addon>Yeux :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="La couleur des yeux de ton personnage"
                                    ref='detailYeux' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailTaille">
                            <InputGroup>
                                <InputGroup.Addon>Taille :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="La taille de ton personnage (en cm)"
                                    ref='detailTaille' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailCheveux">
                            <InputGroup>
                                <InputGroup.Addon>Cheveux :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="la couleur des cheveux de ton personnage"
                                    ref='detailCheveux' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailPoids">
                            <InputGroup>
                                <InputGroup.Addon>Poids :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Le poids de ton personnage (en kg)"
                                    ref='detailPoids' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailSigne">
                            <InputGroup>
                                <InputGroup.Addon>Signe astral :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Le signe astral de ton personnage"
                                    ref='detailSigne' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailFraterie">
                            <InputGroup>
                                <InputGroup.Addon>Fraterie :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Combien de frère(s) et soeur(s) a ton personnage"
                                    ref='detailFraterie' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailNaissance">
                            <InputGroup>
                                <InputGroup.Addon>Naissance :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="Le lieu de naissance de ton personnage"
                                    ref='detailNaissance' />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailDistinction">
                            <InputGroup>
                                <InputGroup.Addon>Distinction :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    placeholder="La distinction de ton personnage"
                                    ref='detailDistinction' />
                            </InputGroup>
                        </FormGroup>
                        <Button onClick={this.postProfile.bind(this)}>Envoyer</Button>
                    </Panel>
                </PanelGroup>
            </Col>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postProfile
    }, dispatch)
}

export default connect("", mapDispatchToProps)(Creation);