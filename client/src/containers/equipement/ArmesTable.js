import React, { Component } from 'react';
import { Col, Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArme } from "../../actions/ArmeAction";
import { Armes } from '../../components/equipement/Armes';

class ArmesTable extends Component {
    componentWillMount() {
        this.props.getArme();
    }

    render() {
        return (
            <Col xs={12} md={6}>
                <Panel header="Armes" bsStyle="info">
                    <Table condensed bordered hover striped fill>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Enc</th>
                                <th><span className="show-desktop">Dégâts</span><span className="show-mobile">Dég</span></th>
                                <th>Portée</th>
                                <th><span className="show-desktop">Rechargement</span><span className="show-mobile">Recharg</span></th>
                                <th>Attributs</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.arme.map((armes, i) => <Armes key={i} {...armes} />) }
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        arme: state.arme.arme
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArme
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmesTable);
