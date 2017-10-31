import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Competence from "../../components/personnage/Competence";
import { getCompBase } from "../../actions/CompBaseAction";

class CompetenceBase extends Component {
    componentDidMount() {
        this.props.getCompBase();
    }

    render() {
        return (
            <Col xs={12} md={6} lg={4}>
                <Table condensed hover striped className="border table-desktop">
                    <thead>
                        <tr>
                            <th className="text-center">Compétences de base</th>
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
                            this.props.compBase.map((competenceB, i) =>
                                <Competence key={i} {...competenceB}/>
                            )
                        }
                    </tbody>
                </Table>
                <Table condensed hover striped className="border table-mobile">
                    <thead>
                        <tr>
                            <th className="text-center">Compétences de base</th>
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
                        this.props.compBase.map((competenceB, i) =>
                            <Competence key={i} {...competenceB}/>
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
        compBase: state.compBase.compBase
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCompBase:getCompBase
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CompetenceBase);
