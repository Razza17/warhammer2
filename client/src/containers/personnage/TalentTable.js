import React, { Component } from 'react';
import { Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Talent } from "../../components/personnage/Talent";
import TalentUpdate from '../../components/update/TalentUpdate';
import { getTalent } from "../../actions/TalentAction";

class TalentTable extends Component {

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
        this.props.getTalent();
    }

    render () {
        return (
            <Panel header="Talents" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th><span className="show-desktop">Description</span><span className="show-mobile">Desc</span></th>
                            <th><span className="show-desktop">Compétences</span><span className="show-mobile">Comp</span></th>
                            <th>Bonus</th>
                            {this.state.update && <th>Update</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.talent.map((talents, i) =>
                                this.state.update ? <TalentUpdate key={i} {...talents} getTalent={this.props.getTalent} /> : <Talent key={i} {...talents} />
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