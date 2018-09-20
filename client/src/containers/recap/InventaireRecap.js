import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InventaireUpdate from '../../components/update/InventaireUpdate';

import { getInventaire } from "../../actions/InventaireAction";

import { updateMessage } from "../../hocs/updateMessage";

class InventaireRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getInventaire(userID, userPersoID);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Inventaire</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                <th><span className="show-desktop">Quantité</span><span className="show-mobile">Qté</span></th>
                <th><span className="show-desktop">Encombrement</span><span className="show-mobile">Enc</span></th>
              </tr>
            </thead>
            <tbody>
              { this.props.inventaire.map((inventaires, i) => <InventaireUpdate key={inventaires._id} {...inventaires} />) }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    inventaire: state.inventaire.inventaire,
    modified: state.inventaire.payload,
    msg: state.inventaire.msg,
    style: state.inventaire.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getInventaire
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(InventaireRecap));
