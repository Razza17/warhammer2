import React, { Component } from 'react';
import { Col, Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTalent } from "../../actions/TalentAction";
import TalentUpdate from "../../components/update/TalentUpdate";

class TalentTableUpdate extends Component {
    componentDidMount() {
        this.props.getTalent();
    }

    render () {
        return (
            <Col xs={12}>
                <Panel collapsible header="Talents">
                    <Table condensed hover striped className="border" fill>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Compétences</th>
                                <th>Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.talent.map((talents, i) =>
                                <TalentUpdate key={i} {...talents} getTalent={this.props.getTalent} />
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
        talent: state.talent.talent
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        getTalent:getTalent
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (TalentTableUpdate);