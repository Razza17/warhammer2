import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCarac } from "../../actions/CaracAction";

class EncContainer extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getCarac(userID, userPersoID);
  }

  encArme() {
    const arme = this.props.arme;
    let total = 0;

    arme.map((armes) => {
      total += armes.encombrement
      return total !== 0 ? total : 0
    })

    return total
  }

  encArmure() {
    const armure = this.props.armure;
    let total = 0;

    armure.map((armures) => {
      total += armures.encombrement
      return total !== 0 ? total : 0
    })

    return total
  }

  encInventaire() {
    const inventaire = this.props.inventaire;
    let total = 0;

    inventaire.map((inventaires) => {
      total += inventaires.encombrement
      return total !== 0 ? total : 0
    })

    return total
  }

  render() {
    let total = this.encArme() + this.encArmure() + this.encInventaire();
    let max = this.props.carac.length > 0 && this.props.carac[2].f * 10;
    let encombrement = "Encombrement : " + total + " sur " + max;
    return (
      <Panel className="enc" bsStyle={total < max ? "default" : "danger"}>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{encombrement}</Panel.Title>
        </Panel.Heading>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    carac: state.carac.carac,
    arme: state.arme.arme,
    armure: state.armure.armure,
    inventaire: state.inventaire.inventaire
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCarac
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EncContainer);
