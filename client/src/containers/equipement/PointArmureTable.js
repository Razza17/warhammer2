import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

class PointArmureTable extends Component {

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
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Points de ton armure</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
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
                <td>{this.ptsTete() + be}</td>
                <td>01 - 15</td>
              </tr>
              <tr>
                <td>Bras droit</td>
                <td>
                  {this.ptsTorse() + this.ptsBras() + be}
                </td>
                <td>16 - 35</td>
              </tr>
              <tr>
                <td>Bras gauche</td>
                <td>
                  {this.ptsTorse() + this.ptsBras() + be}
                </td>
                <td>35 - 55</td>
              </tr>
              <tr>
                <td>Corps</td>
                <td>
                  {this.ptsTorse() + this.ptsCorps() + be}
                </td>
                <td>56 - 80</td>
              </tr>
              <tr>
                <td>Jambe droite</td>
                <td>{this.ptsJambes() + be}</td>
                <td>81 - 90</td>
              </tr>
              <tr>
                <td>Jambe gauche</td>
                <td>{this.ptsJambes() + be}</td>
                <td>91 - 00</td>
              </tr>
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    armure: state.armure.armure,
    carac: state.carac.carac
  }
}

export default connect(mapStateToProps, null)(PointArmureTable);
