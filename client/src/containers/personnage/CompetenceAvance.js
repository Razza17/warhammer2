import React, { Component } from 'react';
import { Col, Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCompAvance, updateCompAvance } from "../../actions/CompAvanceAction";
import Competence from "../../components/personnage/Competence";
import CompetenceAvanceUpdate from '../../components/update/CompetenceAvanceUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class CompetenceAvance extends Component {

    constructor(props) {
        super(props);

        this.state = {
            update: false
        }
    }

    showUpdate() {
        this.setState({
            update: !this.state.update
        })
    }

    componentWillMount() {
        this.props.getCompAvance();
    }

    render() {
        return (
            <Col xs={12} md={6} lg={4}>
                <Panel header="Compétences de Avancées" className="noPadding">
                    <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                    <Table condensed hover striped className="border table-desktop" fill>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Carac.</th>
                            <th><span className="show-desktop">Acquis</span><span className="show-mobile">Acq.</span></th>
                            <th>+10%</th>
                            <th>+20%</th>
                            <th><span className="show-desktop">Bonus</span><span className="show-mobile">Bon.</span></th>
                            <th><span className="show-desktop">Total</span><span className="show-mobile">Tot.</span></th>
                            {this.state.update && <th>Update</th>}
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.compAvance.map((competenceA, i) =>
                                    this.state.update ? <CompetenceAvanceUpdate key={i} {...competenceA} getCompAvance={this.props.getCompAvance}  updateCompAvance={this.props.updateCompAvance}/> : <Competence key={i} {...competenceA}/>
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
        compAvance: state.compAvance.compAvance,
        modified: state.compAvance.payload,
        msg: state.compAvance.msg,
        style: state.compAvance.style
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCompAvance,
        updateCompAvance
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompetenceAvance));
