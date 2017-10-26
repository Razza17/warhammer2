import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracBase, updateCaracBase } from "../../actions/CaracBaseAction";
import { CaracBaseUpdate } from "../../components/update/CaracBaseUpdate";


class CaracTableUpdate extends Component {
    componentDidMount() {
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
                    { this.props.caracBase.map((caracBase, i) => <CaracBaseUpdate key={i}
                    getCaracBase={this.props.getCaracBase}
                    updateCaracBase={this.props.updateCaracBase}
                    {...caracBase}/>)}
                </tbody>
            </Table>
        )
    }
}

function mapStateToProps(state){
    return {
        caracBase: state.caracBase.caracBase
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCaracBase:getCaracBase,
        updateCaracBase:updateCaracBase
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CaracTableUpdate);