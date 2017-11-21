import React, { Component } from 'react';
import { Col, Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Competence from "../../components/personnage/Competence";
import CompetenceBaseUpdate from '../../components/update/CompetenceBaseUpdate';
import { getCompBase, updateCompBase } from "../../actions/CompBaseAction";
import { updateMessage } from "../../hocs/updateMessage";

class CompetenceBase extends Component {

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
        this.props.getCompBase();
    }

    render() {
        return (
            <Panel header="Compétences de base" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed hover striped fill>
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
                            this.props.compBase.map((competenceB, i) =>
                                this.state.update ? <CompetenceBaseUpdate key={i} {...competenceB} getCompBase={this.props.getCompBase} updateCompBase={this.props.updateCompBase}/> : <Competence key={i} {...competenceB}/>
                            )
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        compBase: state.compBase.compBase,
        modified: state.compBase.payload,
        msg: state.compBase.msg,
        style: state.compBase.style
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCompBase,
        updateCompBase
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompetenceBase));
