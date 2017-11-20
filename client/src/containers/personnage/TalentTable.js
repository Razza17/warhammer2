import React, { Component } from 'react';
import { Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Talent } from "../../components/personnage/Talent";
import { TalentUpdate } from '../../components/update/TalentUpdate';
import { getTalent, updateTalent } from "../../actions/TalentAction";
import { updateMessage } from "../../hocs/updateMessage";

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
                                this.state.update ?
                                    <TalentUpdate key={i} {...talents} getTalent={this.props.getTalent} updateTalent={this.props.updateTalent} /> :
                                    <Talent key={i} {...talents} />
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
        talent: state.talent.talent,
        modified: state.talent.payload,
        msg: state.talent.msg,
        style: state.talent.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        getTalent,
        updateTalent
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(TalentTable));