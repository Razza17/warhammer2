import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArmureUpdate from '../../components/update/ArmureUpdate';

import { getArmure } from "../../actions/ArmureAction";

import { updateMessage } from "../../hocs/updateMessage";

class ArmureRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getArmure(userID, userPersoID);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Armures</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                <th>Enc</th>
                <th><span className="show-desktop">Couverture</span><span className="show-mobile">Couv</span></th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              { this.props.armure.map((armures, i) => <ArmureUpdate key={armures._id} {...armures} />) }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    armure: state.armure.armure,
    modified: state.armure.payload,
    msg: state.armure.msg,
    style: state.armure.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getArmure
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(ArmureRecap));
