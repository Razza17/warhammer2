import React, { Component } from 'react';
import { Col, Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracActuel } from "../../actions/CaracActuelAction";
import { getCaracAvance } from "../../actions/CaracAvanceAction";
import { getCaracBase } from "../../actions/CaracBaseAction";
import { CaracBase} from "../../components/personnage/CaracBase";
import { CaracBaseP } from "../../components/personnage/CaracBaseP";
import { CaracBaseS } from "../../components/personnage/CaracBaseS";
import { CaracAvance } from "../../components/personnage/CaracAvance";
import { CaracAvanceP } from "../../components/personnage/CaracAvanceP";
import { CaracAvanceS } from "../../components/personnage/CaracAvanceS";
import { CaracActuel } from "../../components/personnage/CaracActuel";
import { CaracActuelP } from "../../components/personnage/CaracActuelP";
import { CaracActuelS } from "../../components/personnage/CaracActuelS";


class CaracTable extends Component {
    componentWillMount() {
        this.props.getCaracActuel();
        this.props.getCaracAvance();
        this.props.getCaracBase();
    }

    render() {
        return (
            <Col xs={12} lg={8}>
                <Panel header="Profil du personnage">
                    <Table condensed bordered hover striped className="carac-table-desktop" fill>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th colSpan="8">Profil Principal</th>
                                <th colSpan="8">Profil Secondaire</th>
                            </tr>
                            <tr className="text-center profilHeader">
                                <th>&nbsp;</th>
                                <th>CC</th>
                                <th>CT</th>
                                <th>F</th>
                                <th>E</th>
                                <th>Ag</th>
                                <th>Int</th>
                                <th>FM</th>
                                <th>Soc</th>
                                <th>A</th>
                                <th>B</th>
                                <th>BF</th>
                                <th>BE</th>
                                <th>M</th>
                                <th>Mag</th>
                                <th>PF</th>
                                <th>PD</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.caracBase.map((caracBase, i) => <CaracBase key={i} {...caracBase}/>) }
                            { this.props.caracAvance.map((caracAvance, i) => <CaracAvance key={i} {...caracAvance}/>) }
                            { this.props.caracActuel.map((caracActuel, i) => <CaracActuel key={i} {...caracActuel}/>) }
                        </tbody>
                    </Table>
                    <Table condensed bordered hover striped className="carac-table-mobile" fill>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th colSpan="8">Profil Principal</th>
                            </tr>
                            <tr className="text-center profilHeader">
                                <th>&nbsp;</th>
                                <th>CC</th>
                                <th>CT</th>
                                <th>F</th>
                                <th>E</th>
                                <th>Ag</th>
                                <th>Int</th>
                                <th>FM</th>
                                <th>Soc</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.caracBase.map((caracBase, i) => <CaracBaseP key={i} {...caracBase}/>) }
                            { this.props.caracAvance.map((caracAvance, i) => <CaracAvanceP key={i} {...caracAvance}/>) }
                            { this.props.caracActuel.map((caracActuel, i) => <CaracActuelP key={i} {...caracActuel}/>) }
                        </tbody>
                        <thead>
                            <tr>
                                <th>&nbsp;</th>
                                <th colSpan="8">Profil Secondaire</th>
                            </tr>
                            <tr className="text-center profilHeader">
                                <th>&nbsp;</th>
                                <th>A</th>
                                <th>B</th>
                                <th>BF</th>
                                <th>BE</th>
                                <th>M</th>
                                <th>Mag</th>
                                <th>PF</th>
                                <th>PD</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.caracBase.map((caracBase, i) => <CaracBaseS key={i} {...caracBase}/>) }
                            { this.props.caracAvance.map((caracAvance, i) => <CaracAvanceS key={i} {...caracAvance}/>) }
                            { this.props.caracActuel.map((caracActuel, i) => <CaracActuelS key={i} {...caracActuel}/>) }
                        </tbody>
                    </Table>
                </Panel>
            </Col>
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
        getCaracActuel,
        getCaracAvance,
        getCaracBase
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CaracTable);