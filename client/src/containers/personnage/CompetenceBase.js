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
                            <th>Compétences de base</th>
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
                <Table condensed hover striped className="border table-mobile">
                    <thead>
                        <tr>
                            <th>Compétences de base</th>
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
