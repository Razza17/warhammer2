import React, { Component } from 'react';
import { Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getArme } from "../../actions/ArmeAction";
import { Armes } from '../../components/equipement/Armes';
import ArmesUpdate from '../../components/update/ArmesUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class ArmesTable extends Component {

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
        this.props.getArme();
    }

    render() {
        return (
            <Panel header="Armes" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Enc</th>
                            <th><span className="show-desktop">Dégâts</span><span className="show-mobile">Dég</span></th>
                            <th>Portée</th>
                            <th><span className="show-desktop">Rechargement</span><span className="show-mobile">Recharg</span></th>
                            <th>Attributs</th>
                            {this.state.update && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.arme.map((armes, i) => this.state.update ?
                                <ArmesUpdate key={i} {...armes} getArme={this.props.getArme} /> :
                                <Armes key={i} {...armes} />)
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        arme: state.arme.arme,
        modified: state.arme.payload,
        msg: state.arme.msg,
        style: state.arme.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArme
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ArmesTable));
