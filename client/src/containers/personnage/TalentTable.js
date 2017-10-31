import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Talent } from "../../components/personnage/Talent";
import { getTalent } from "../../actions/TalentAction";

class TalentTable extends Component {
    componentDidMount() {
        this.props.getTalent();
    }

    render () {
        return (
            <Table condensed hover striped className="border">
                <thead>
                    <tr>
                        <th className="text-center">Talents</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Compétences</th>
                        <th className="text-center">Bonus</th>
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

export default connect (mapStateToProps, mapDispatchToProps) (TalentTable)