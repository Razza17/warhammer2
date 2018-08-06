import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCarac } from "../../actions/CaracAction";

class PointArmureTable extends Component {

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
    this.props.getCarac(this.state.user, this.state.perso);
  }

  ptsTete() {
    const tete = this.props.armure;
    let total = 0;

    for (let i = 0; i < tete.length; i++) {
      if (tete[i].couverture === "Tête") {
        total += tete[i].points;
      }

      if (i === tete.length - 1) {
        return Math.round(total);
      }
    }
  }

  ptsBras() {
    const bras = this.props.armure;
    let total = 0;

    for (let i = 0; i < bras.length; i++) {
      if (bras[i].couverture === "Bras") {
        total += bras[i].points;
      }

      if (i === bras.length - 1) {
        return Math.round(total);
      }
    }
  }

  ptsCorps() {
    const corps = this.props.armure;
    let total = 0;

    for (let i = 0; i < corps.length; i++) {
      if (corps[i].couverture === "Corps") {
        total += corps[i].points;
      }

      if (i === corps.length - 1) {
        return Math.round(total);
      }
    }
  }

  ptsTorse() {
    const torse = this.props.armure;
    let total = 0;

    for (let i = 0; i < torse.length; i++) {
      if (torse[i].couverture === "Corps + Bras") {
        total += torse[i].points;
      }

      if (i === torse.length - 1) {
        return Math.round(total);
      }
    }
  }

  ptsJambes(){
    const jambes = this.props.armure;
    let total = 0;

    for (let i = 0; i < jambes.length; i++) {
      if (jambes[i].couverture === "Jambes") {
        total += jambes[i].points;
      }

      if (i === jambes.length - 1) {
        return Math.round(total);
      }
    }
  }

  render() {
    let be = this.props.carac.length > 0 && this.props.carac[2].be;
    return (
      <Panel header="Points d'armure">
        <Table condensed bordered hover striped fill>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Points (Amure + BE)</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tête</td>
              <td>{typeof this.ptsTete() !== "number" ? be : this.ptsTete() + be}</td>
              <td>01 - 15</td>
            </tr>
            <tr>
              <td>Bras droit</td>
              <td>
                {
                  typeof this.ptsBras() !== "number"
                  ? (typeof this.ptsTorse() !== "number"
                  ? be
                  : this.ptsTorse() + be)
                  : (typeof this.ptsTorse() !== "number"
                  ? this.ptsBras() + be
                  : this.ptsTorse() + this.ptsBras() + be)
                }
              </td>
              <td>16 - 35</td>
            </tr>
            <tr>
              <td>Bras gauche</td>
              <td>
                {
                  typeof this.ptsBras() !== "number"
                  ? (typeof this.ptsTorse() !== "number"
                  ? be
                  : this.ptsTorse() + be)
                  : (typeof this.ptsTorse() !== "number"
                  ? this.ptsBras() + be
                  : this.ptsTorse() + this.ptsBras() + be)
                }
              </td>
              <td>35 - 55</td>
            </tr>
            <tr>
              <td>Corps</td>
              <td>
                {
                  typeof this.ptsCorps() !== "number"
                  ? (typeof this.ptsTorse() !== "number"
                  ? be
                  : this.ptsTorse() + be)
                  : (typeof this.ptsTorse() !== "number"
                  ? this.ptsCorps() + be
                  : this.ptsTorse() + this.ptsCorps() + be)
                }
              </td>
              <td>56 - 80</td>
            </tr>
            <tr>
              <td>Jambe droite</td>
              <td>{typeof this.ptsJambes() !== "number" ? be : this.ptsJambes() + be}</td>
              <td>81 - 90</td>
            </tr>
            <tr>
              <td>Jambe gauche</td>
              <td>{typeof this.ptsJambes() !== "number" ? be : this.ptsJambes() + be}</td>
              <td>91 - 00</td>
            </tr>
          </tbody>
        </Table>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    armure: state.armure.armure,
    carac: state.carac.carac
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    getCarac
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(PointArmureTable);
