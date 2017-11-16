import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Panel, Table } from 'react-bootstrap';

import { ProfilUpdate } from "../../components/update/ProfilUpdate";
import { getProfile, updateProfile } from '../../actions/ProfilAction';
import { updateMessage } from "../../hocs/updateMessage";

class ProfilTableUpdate extends Component {

    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <Col xs={8} md={4}>
                <Panel collapsible header="Personnage">
                    <Table condensed bordered hover striped fill>
                        <thead>
                            <tr>
                                <th>Carrière Actuelle</th>
                                <th>Ancienne Carrière</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.profile.map((perso, i) => <ProfilUpdate key={i}
                                                                                getProfile={this.props.getProfile}
                                                                                updateProfile={this.props.updateProfile}
                                                                                {...perso} />)
                            }
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        profile: state.profile.profile,
        status: state.profile.status
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProfile:getProfile,
        updateProfile:updateProfile
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ProfilTableUpdate));
