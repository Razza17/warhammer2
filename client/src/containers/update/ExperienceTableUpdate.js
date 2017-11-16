import React, { Component } from 'react';
import { Col, Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getExperience, updateExperience } from "../../actions/ExperienceAction";
import { ExperienceUpdate } from '../../components/update/ExperienceUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class ExperienceTableUpdate extends Component {
    componentWillMount() {
        this.props.getExperience();
    }

    render() {
        return (
            <Col xs={8} md={4}>
                <Panel collapsible header="Experience">
                    <Table condensed bordered hover striped fill>
                        <thead>
                            <tr>
                                <th>Actuel</th>
                                <th>Total</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.experience.map((experience) => <ExperienceUpdate key={experience._id} {...experience} getExperience={this.props.getExperience} updateExperience={this.props.updateExperience} />) }
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        experience: state.experience.experience,
        status: state.experience.status
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getExperience:getExperience,
        updateExperience: updateExperience
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ExperienceTableUpdate));
