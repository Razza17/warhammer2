import React, { Component } from 'react';
import { Col, Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Competence from "../../components/personnage/Competence";
import { getCompBase } from "../../actions/CompBaseAction";

class CompetenceBase extends Component {
    componentWillMount() {
        this.props.getCompBase();
    }

    render() {
        return (
            <Col xs={12} md={6} lg={4}>
                <Panel header="Compétence de base" bsStyle="info">
                    <Table condensed hover striped className="border table-desktop" fill>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Carac.</th>
                                <th>Acquis</th>
                                <th>+10%</th>
                                <th>+20%</th>
                                <th>Bonus</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.compBase.map((competenceB, i) =>
                                    <Competence key={i} {...competenceB}/>
                                )
                            }
                        </tbody>
                    </Table>
                    <Table condensed hover striped className="border table-mobile" fill>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Carac.</th>
                                <th>Ac.</th>
                                <th>+10</th>
                                <th>+20</th>
                                <th>Bon.</th>
                                <th>Tot.</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.compBase.map((competenceB, i) =>
                                <Competence key={i} {...competenceB}/>
                            )
                        }
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        compBase: state.compBase.compBase
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCompBase
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetenceBase);
