import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Encombrement } from '../../components/equipement/Encombrement';

class EncContainer extends Component {

    encArme() {
        const arme = this.props.arme;
        let total = 0;

        for (let i = 0; i < arme.length; i++) {
            total += arme[i].encombrement;

            if (i === arme.length - 1) {
                return total;
            }
        }

        if (total === "unfedfined") {
            return 0;
        } else {
            return total;
        }
    }

    encArmure() {
        const armure = this.props.armure;
        let total = 0;

        for (let i = 0; i < armure.length; i++) {
            total += armure[i].encombrement;

            if (i === armure.length - 1) {
                return total;
            }
        }

        if (total === "unfedfined") {
            return 0;
        } else {
            return total;
        }
    }

    encInventaire() {
        const inventaire = this.props.inventaire;
        let total = 0;

        for (let i = 0; i < inventaire.length; i++) {
            total += inventaire[i].encombrement;

            if (i === inventaire.length - 1) {
                return total;
            }
        }

        if (total === "unfedfined") {
            return 0;
        } else {
            return total;
        }
    }

    render() {
        return (
            <Col xs={8} md={4}>
                {
                    this.props.carac.map((carac, i) => <Encombrement key={i} {...carac} arme={this.encArme()} armure={this.encArmure()} inventaire={this.encInventaire()} />)
                }
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        carac: state.caracActuel.caracActuel,
        arme: state.arme.arme,
        armure: state.armure.armure,
        inventaire: state.inventaire.inventaire
    }
}

export default connect(mapStateToProps)(EncContainer);
