import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracActuel } from "../../actions/CaracActuelAction";
import { getCaracAvance } from "../../actions/CaracAvanceAction";
import { getCaracBase } from "../../actions/CaracBaseAction";
import { CaracBaseP } from "../../components/personnage/CaracBaseP";
import { CaracBaseS } from "../../components/personnage/CaracBaseS";
import { CaracAvanceP } from "../../components/personnage/CaracAvanceP";
import { CaracAvanceS } from "../../components/personnage/CaracAvanceS";
import { CaracActuelP } from "../../components/personnage/CaracActuelP";
import { CaracActuelS } from "../../components/personnage/CaracActuelS";


class CaracTableM extends Component {
    componentDidMount() {
        this.props.getCaracActuel();
        this.props.getCaracAvance();
        this.props.getCaracBase();
    }

    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="9" className="text-center">Profil du Personnage</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan="8">Profil Principal</td>
                    </tr>
                    <tr className="text-center profilHeader">
                        <td>&nbsp;</td>
                        <td>CC</td>
                        <td>CT</td>
                        <td>F</td>
                        <td>E</td>
                        <td>Ag</td>
                        <td>Int</td>
                        <td>FM</td>
                        <td>Soc</td>
                    </tr>
                    { this.props.caracBase.map((caracBase, i) => <CaracBaseP key={i} {...caracBase}/>) }
                    { this.props.caracAvance.map((caracAvance, i) => <CaracAvanceP key={i} {...caracAvance}/>) }
                    { this.props.caracActuel.map((caracActuel, i) => <CaracActuelP key={i} {...caracActuel}/>) }
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan="8">Profil Secondaire</td>
                    </tr>
                    <tr className="text-center profilHeader">
                        <td>&nbsp;</td>
                        <td>A</td>
                        <td>B</td>
                        <td>BF</td>
                        <td>BE</td>
                        <td>M</td>
                        <td>Mag</td>
                        <td>PF</td>
                        <td>PD</td>
                    </tr>
                    { this.props.caracBase.map((caracBase, i) => <CaracBaseS key={i} {...caracBase}/>) }
                    { this.props.caracAvance.map((caracAvance, i) => <CaracAvanceS key={i} {...caracAvance}/>) }
                    { this.props.caracActuel.map((caracActuel, i) => <CaracActuelS key={i} {...caracActuel}/>) }
                </tbody>
            </Table>
        )
    }
}

function mapStateToProps(state){
    return {
        caracBase: state.caracBase.caracBase,
        caracAvance: state.caracAvance.caracAvance,
        caracActuel: state.caracActuel.caracActuel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCaracActuel:getCaracActuel,
        getCaracAvance:getCaracAvance,
        getCaracBase:getCaracBase
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CaracTableM);