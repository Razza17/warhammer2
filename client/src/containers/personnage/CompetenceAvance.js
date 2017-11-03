import React, { Component } from 'react';
import { Col, Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCompAvance } from "../../actions/CompAvanceAction";
import Competence from "../../components/personnage/Competence";

class CompetenceAvance extends Component {
    componentDidMount() {
        this.props.getCompAvance();
    }

    render() {
        return (
            <Col xs={12} md={6} lg={4}>
                <Panel header="Compétences avancées" bsStyle="info">
                    <Table condensed hover striped className="border table-desktop">
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
                                this.props.compAvance.map((competenceA, i) =>
                                    <Competence key={i} {...competenceA}/>
                                )
                            }
                        </tbody>
                    </Table>
                    <Table condensed hover striped className="border table-mobile">
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
                            this.props.compAvance.map((competenceA, i) =>
                                <Competence key={i} {...competenceA}/>
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
        compAvance: state.compAvance.compAvance
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCompAvance:getCompAvance
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetenceAvance);
