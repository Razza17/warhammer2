import React, { Component } from 'react';
import { Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArmure } from "../../actions/ArmureAction";
import { Armure } from '../../components/equipement/Armure';
import ArmureUpdate from '../../components/update/ArmureUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class ArmureTable extends Component {

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
        this.props.getArmure();
    }

    render() {
        return (
            <Panel header="Armures" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Enc</th>
                            <th><span className="show-desktop">Couverture</span><span className="show-mobile">Couv</span></th>
                            <th>Points</th>
                            {this.state.update && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.armure.map((armure, i) => this.state.update ?
                            <ArmureUpdate key={i} {...armure} getArmure={this.props.getArmure} /> :
                            <Armure key={i} {...armure} />)
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        armure: state.armure.armure,
        modified: state.armure.payload,
        msg: state.armure.msg,
        style: state.armure.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArmure
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ArmureTable));
