import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InventaireUpdate from '../../components/update/InventaireUpdate';

import { updateInventaire, getInventaire } from "../../actions/InventaireAction";

import { updateMessage } from "../../hocs/updateMessage";

class InventaireRecap extends Component {

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
    this.props.getInventaire(this.state.user, this.state.perso);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Inventaire</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped fill>
            <thead>
              <tr>
                <th>Nom</th>
                <th><span className="show-desktop">Quantité</span><span className="show-mobile">Qté</span></th>
                <th><span className="show-desktop">Encombrement</span><span className="show-mobile">Enc</span></th>
              </tr>
            </thead>
            <tbody>
              { this.props.inventaire.map((inventaires, i) => <InventaireUpdate key={inventaires._id} {...inventaires} getInventaire={this.props.getInventaire} />) }
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
    getInventaire, updateInventaire
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(InventaireRecap));
