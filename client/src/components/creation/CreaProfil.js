import React, { Component } from 'react';
import { Form, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postProfile } from "../../actions/ProfilAction";

class CreaProfil extends Component {

    constructor(props) {
        super(props);
        let recupUser = window.location.search.substring(1).split('=');
        let user = recupUser[1];

        this.state = {
            user: user,
            profileNom: null,
            profileRace: null,
            profileCarriereA: null,
            profileAcarriere: null,
            profileFormValidate: false
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
            this.setState({ profileFormValidate: true });
        } else {
            this.state.profileNom === null && this.setState({ profileNom: "error" });
            this.state.profileRace === null && this.setState({ profileRace: "error" });
            this.state.profileCarriereA === null && this.setState({ profileCarriereA: "error" });
            this.state.profileAcarriere === null && this.setState({ profileAcarriere: "error" });
            alert("Tu dois remplir tous les champs guerrier !");
        }
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        value !== "" ? this.setState({ [name]: "success" }) : this.setState({ [name]: "error" });
    }

    render() {
        return (
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
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postProfile
    }, dispatch)
}

export default connect("", mapDispatchToProps)(CreaProfil);