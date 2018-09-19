import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TalentUpdate from '../../components/update/TalentUpdate';

import { updateTalent, getTalent } from "../../actions/TalentAction";

import { updateMessage } from "../../hocs/updateMessage";

class TalentRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPerso = localStorage.getItem('userPerso');

    this.state = {
      userID: userID,
      userPerso: userPerso
    }
  }

  componentWillMount() {
    this.props.getTalent(this.state.userID, this.state.userPerso);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Talents</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                <th><span className="show-desktop">Description</span><span className="show-mobile">Desc</span></th>
                <th><span className="show-desktop">Compétences</span><span className="show-mobile">Comp</span></th>
                <th>Bonus</th>
              </tr>
            </thead>
            <tbody>
              { this.props.talent.map((talents, i) => <TalentUpdate key={i} {...talents} getTalent={this.props.getTalent} updateTalent={this.props.updateTalent} />) }
            </tbody>
          </Table>
        </Panel.Body>
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
    getTalent, updateTalent
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(TalentRecap));
