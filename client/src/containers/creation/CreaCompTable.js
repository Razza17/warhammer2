import React, { Component } from 'react';
import { Col, PanelGroup, Panel, Table } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Competence from '../../data/Competence';
import CreaCompBase from '../../components/creation/CreaCompBase';
import { getProfile } from "../../actions/ProfilAction";

class CreaCompTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeKey: "0"
        }
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
        this.props.getProfile();
    }

    render() {
        const perso = this.props.profile.length && this.props.profile[0].nom;
        return (
            <Col xs={12} md={6} mdOffset={3}>
                <h2 className="text-center uppercase">Compétences de base et avancées</h2>
                <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
                    <Panel eventKey="1" header="Compétences de base">
                        <Table condensed hover striped className="border" fill>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Carac.</th>
                                    <th>Acquis</th>
                                    <th>+10%</th>
                                    <th>+20%</th>
                                    <th>Bonus</th>
                                    <th>Enregistrer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Competence.competenceB.map((competenceB, i) =>
                                            <CreaCompBase key={i} {...competenceB} character={perso} />
                                    )
                                }
                            </tbody>
                        </Table>
                    </Panel>

                    <Panel eventKey="2" header="Compétences avancées">
                        
                    </Panel>
                </PanelGroup>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        profile: state.profile.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProfile
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaCompTable);