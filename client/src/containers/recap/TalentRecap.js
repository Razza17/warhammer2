import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TalentUpdate from '../../components/update/TalentUpdate';

import { getTalent } from "../../actions/TalentAction";

import { updateMessage } from "../../hocs/updateMessage";

class TalentRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getTalent(userID, userPersoID);
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
              { this.props.talent.map((talents, i) => <TalentUpdate key={i} {...talents} />) }
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
    getTalent
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(TalentRecap));
