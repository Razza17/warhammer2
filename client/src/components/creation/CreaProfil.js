import React, { Component } from 'react';
import { Col, FormGroup, FormControl, InputGroup, Button, PanelGroup, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postProfile, getProfile } from "../../actions/ProfilAction";
import { postDetails } from "../../actions/DetailAction";

class CreaProfil extends Component {

    constructor(props) {
        super(props);
        let user = window.location.search.substring(1);

        this.state = {
            user: user,
            activeKey: "1",
            nextScreen: "/creacarac?pseudo="+user,
            profileNom: null,
            profileRace: null,
            profileCarriereA: null,
            profileAcarriere: null,
            profileFormValidate: false,
            detailAge: null,
            detailSexe: null,
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
            user:this.state.user
        };
        if(this.state.profileNom === "success" && this.state.profileRace === "success" && this.state.profileCarriereA === "success"
            && this.state.profileAcarriere === "success") {
            this.props.postProfile(profile);
            // Plier le Panel en cours et déplier le Panel suivant
            let stateActiveKey = parseInt(this.state.activeKey, 10);
            let newActiveKey = stateActiveKey + 1;
            let string = newActiveKey.toString();
            this.setState({ activeKey: string, profileFormValidate: true });
            this.props.getProfile();
        } else {
            this.state.profileNom === null && this.setState({ profileNom: "error" });
            this.state.profileRace === null && this.setState({ profileRace: "error" });
            this.state.profileCarriereA === null && this.setState({ profileCarriereA: "error" });
            this.state.profileAcarriere === null && this.setState({ profileAcarriere: "error" });
            alert("Tu dois remplir tous les champs guerrier !");
        }
    }

    postDetails() {
        let perso = this.props.profile.length && this.props.profile[0].nom;
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

        if(this.state.detailAge === "success" && this.state.detailSexe === "success" && this.state.detailYeux === "success"
            && this.state.detailTaille === "success" && this.state.detailCheveux === "success" && this.state.detailPoids === "success"
            && this.state.detailSigne === "success" && this.state.detailFraterie === "success" && this.state.detailNaissance === "success"
            && this.state.detailDistinction === "success") {
            this.props.postDetails(details);
            // Plier le Panel en court et déplier le Panel suivant
            let stateActiveKey = parseInt(this.state.activeKey, 10);
            let newActiveKey = stateActiveKey + 1;
            let string = newActiveKey.toString();
            this.setState({ activeKey: string, detailsFormValidate: true });
        } else {
            this.state.detailAge === null && this.setState({ detailAge: "error" });
            this.state.detailSexe === null && this.setState({ detailSexe: "error" });
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
            <Col xs={12} md={6} mdOffset={3}>
                <h2 className="text-center uppercase">Profil et détails de ton perso</h2>
                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
                    <Panel eventKey="1" header="Profil de ton personnage">
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
                        {this.state.profileFormValidate
                            ? <Button disabled>Enregistrer</Button>
                            : <Button onClick={this.postProfile.bind(this)}>Enregistrer</Button>
                        }
                    </Panel>

                    <Panel eventKey="2" header="Details de ton personnage">
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
                        <FormGroup controlId="detailSexe" validationState={this.state.detailSexe}>
                            <InputGroup>
                                <InputGroup.Addon>Sexe :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    name='detailSexe'
                                    placeholder="Entre le sexe de ton personnage"
                                    ref='detailSexe'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailYeux" validationState={this.state.detailYeux}>
                            <InputGroup>
                                <InputGroup.Addon>Yeux :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    name='detailYeux'
                                    placeholder="La couleur des yeux de ton personnage"
                                    ref='detailYeux'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailTaille" validationState={this.state.detailTaille}>
                            <InputGroup>
                                <InputGroup.Addon>Taille :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    name='detailTaille'
                                    placeholder="La taille de ton personnage (en cm)"
                                    ref='detailTaille'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailCheveux" validationState={this.state.detailCheveux}>
                            <InputGroup>
                                <InputGroup.Addon>Cheveux :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    name='detailCheveux'
                                    placeholder="la couleur des cheveux de ton personnage"
                                    ref='detailCheveux'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback/>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup controlId="detailPoids" validationState={this.state.detailPoids}>
                            <InputGroup>
                                <InputGroup.Addon>Poids :</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    name='detailPoids'
                                    placeholder="Le poids de ton personnage (en kg)"
                                    ref='detailPoids'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback/>
                            </InputGroup>
                        </FormGroup>
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
                        {this.state.detailsFormValidate
                            ? <Button disabled>Enregistrer</Button>
                            : <Button onClick={this.postDetails.bind(this)}>Enregistrer</Button>
                        }
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
        postProfile,
        getProfile,
        postDetails
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaProfil);