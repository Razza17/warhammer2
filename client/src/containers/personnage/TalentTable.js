import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Talent } from "../../components/personnage/Talent";
import { getTalent } from "../../actions/TalentAction";

class TalentTable extends Component {
    componentWillMount() {
        this.props.getTalent();
    }

    render () {
        return (
            <Panel header="Talents" bsStyle="info">
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
                            <Talent key={i} {...talents}/>
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
        talent: state.talent.talent
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        getTalent
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (TalentTable)