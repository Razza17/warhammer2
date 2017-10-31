import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
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
                <Table condensed hover striped className="border table_desktop">
                    <thead>
                        <tr>
                            <th className="text-center">Compétences avancées</th>
                            <th className="text-center">Carac.</th>
                            <th className="text-center">Acquis</th>
                            <th className="text-center">+10%</th>
                            <th className="text-center">+20%</th>
                            <th className="text-center">Bonus</th>
                            <th className="text-center">Total</th>
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
                <Table condensed hover striped className="border table_mobile">
                    <thead>
                        <tr>
                            <th className="text-center">Compétences avancées</th>
                            <th className="text-center">Carac.</th>
                            <th className="text-center">Ac.</th>
                            <th className="text-center">+10</th>
                            <th className="text-center">+20</th>
                            <th className="text-center">Bon.</th>
                            <th className="text-center">Tot.</th>
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
