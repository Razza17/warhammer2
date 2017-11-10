import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
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
            <Panel header="Armures" bsStyle="info">
                <Table condensed bordered hover striped fill>
                    <thead>
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
            </Panel>
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
