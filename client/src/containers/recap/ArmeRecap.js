import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArmesUpdate from '../../components/update/ArmesUpdate';

import { updateArme, getArme } from "../../actions/ArmeAction";

import { updateMessage } from "../../hocs/updateMessage";

class ArmeRecap extends Component {

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
    this.props.getArme(this.state.userID, this.state.userPerso);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Armes</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                <th>Enc</th>
                <th><span className="show-desktop">Dégâts</span><span className="show-mobile">Dég</span></th>
                <th>Portée</th>
                <th><span className="show-desktop">Rechargement</span><span className="show-mobile">Recharg</span></th>
                <th>Attributs</th>
              </tr>
            </thead>
            <tbody>
              {this.props.arme.map((armes, i) => <ArmesUpdate key={armes._id} {...armes} getArme={this.props.getArme} />)}
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    arme: state.arme.arme,
    modified: state.arme.payload,
    msg: state.arme.msg,
    style: state.arme.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getArme, updateArme
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(ArmeRecap));
