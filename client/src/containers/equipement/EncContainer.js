import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCarac } from "../../actions/CaracAction";

class EncContainer extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.props.getCarac(user, perso);

    this.state = {
      user: user,
      perso: perso
    }
  }

  encArme() {
    const arme = this.props.arme;
    let total = 0;

    for (let i = 0; i < arme.length; i++) {
      total += arme[i].encombrement;

      if (i === arme.length - 1) {
        return total;
      }
    }

    if (total === "unfedfined") {
      return 0;
    } else {
      return total;
    }
  }

  encArmure() {
    const armure = this.props.armure;
    let total = 0;

    for (let i = 0; i < armure.length; i++) {
      total += armure[i].encombrement;

      if (i === armure.length - 1) {
        return total;
      }
    }

    if (total === "unfedfined") {
      return 0;
    } else {
      return total;
    }
  }

  encInventaire() {
    const inventaire = this.props.inventaire;
    let total = 0;

    for (let i = 0; i < inventaire.length; i++) {
      total += inventaire[i].encombrement;

      if (i === inventaire.length - 1) {
        return total;
      }
    }

    if (total === "unfedfined") {
      return 0;
    } else {
      return total;
    }
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
