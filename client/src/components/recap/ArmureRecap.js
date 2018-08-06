import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArmureUpdate from '../../components/update/ArmureUpdate';

import { updateArmure, getArmure } from "../../actions/ArmureAction";

import { updateMessage } from "../../hocs/updateMessage";

class ArmureRecap extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso
    }
  }

  componentWillMount() {
    this.props.getArmure(this.state.user, this.state.perso);
  }

  render() {
    return (
      <Panel header="Armures" className="noPadding">
        <Table condensed hover striped fill>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Enc</th>
              <th><span className="show-desktop">Couverture</span><span className="show-mobile">Couv</span></th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            { this.props.armure.map((armures, i) => <ArmureUpdate key={armures._id} {...armures} getArmure={this.props.getArmure} />) }
          </tbody>
        </Table>
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
    getArmure, updateArmure
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(ArmureRecap));
