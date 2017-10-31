import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracBase, updateCaracBase } from "../../actions/CaracBaseAction";
import { getCaracAvance, updateCaracAvance } from "../../actions/CaracAvanceAction";
import { getCaracActuel, updateCaracActuel } from "../../actions/CaracActuelAction";
import { CaracBaseUpdate } from "../../components/update/CaracBaseUpdate";
import { CaracAvanceUpdate } from "../../components/update/CaracAvanceUpdate";
import { CaracActuelUpdate } from "../../components/update/CaracActuelUpdate";


class CaracTableUpdate extends Component {
    componentDidMount() {
        this.props.getCaracBase();
        this.props.getCaracAvance();
        this.props.getCaracActuel();
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
                    {this.props.caracBase.map((caracBase, i) => <CaracBaseUpdate key={i}
                                                                                 getCaracBase={this.props.getCaracBase}
                                                                                 updateCaracBase={this.props.updateCaracBase}
                                                                                 {...caracBase}/>)}
                    {this.props.caracAvance.map((caracAvance, i) => <CaracAvanceUpdate key={i}
                                                                                       getCaracAvance={this.props.getCaracAvance}
                                                                                       updateCaracAvance={this.props.updateCaracAvance}
                                                                                       {...caracAvance}/>)}
                    {this.props.caracActuel.map((caracActuel, i) => <CaracActuelUpdate key={i}
                                                                                       getCaracActuel={this.props.getCaracActuel}
                                                                                       updateCaracActuel={this.props.updateCaracActuel}
                                                                                       {...caracActuel}/>)}
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
        getCaracBase:getCaracBase,
        updateCaracBase:updateCaracBase,
        getCaracAvance:getCaracAvance,
        updateCaracAvance:updateCaracAvance,
        getCaracActuel:getCaracActuel,
        updateCaracActuel:updateCaracActuel
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CaracTableUpdate);