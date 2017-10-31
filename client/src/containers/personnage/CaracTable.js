import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracActuel } from "../../actions/CaracActuelAction";
import { getCaracAvance } from "../../actions/CaracAvanceAction";
import { getCaracBase } from "../../actions/CaracBaseAction";
import {CaracBase} from "../../components/personnage/CaracBase";
import {CaracAvance} from "../../components/personnage/CaracAvance";
import {CaracActuel} from "../../components/personnage/CaracActuel";


class CaracTable extends Component {
    componentDidMount() {
        this.props.getCaracActuel();
        this.props.getCaracAvance();
        this.props.getCaracBase();
    }

    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="17" className="text-center">Profil du Personnage</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan="8">Profil Principal</td>
                        <td colSpan="8">Profil Secondaire</td>
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
                        <td>A</td>
                        <td>B</td>
                        <td>BF</td>
                        <td>BE</td>
                        <td>M</td>
                        <td>Mag</td>
                        <td>PF</td>
                        <td>PD</td>
                    </tr>
                    { this.props.caracBase.map((caracBase, i) => <CaracBase key={i} {...caracBase}/>) }
                    { this.props.caracAvance.map((caracAvance, i) => <CaracAvance key={i} {...caracAvance}/>) }
                    { this.props.caracActuel.map((caracActuel, i) => <CaracActuel key={i} {...caracActuel}/>) }
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

export default connect(mapStateToProps, mapDispatchToProps)(CaracTable);