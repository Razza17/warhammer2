import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArmure } from "../../actions/ArmureAction";
import { Armure } from '../../components/equipement/Armure';

class ArmureTable extends Component {
    componentDidMount() {
        this.props.getArmure();
    }

    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="4">Armure</th></tr>
                    <tr>
                        <th>Nom</th>
                        <th>Enc</th>
                        <th>Couverture</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.armure.map((armure, i) => <Armure key={i} {...armure} />) }
                </tbody>
            </Table>
        )
    }
}

function mapStateToProps(state) {
    return {
        armure: state.armure.armure
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArmure:getArmure
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmureTable);
