import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

class PointArmureTable extends Component {
  render() {
    const be = this.props.carac.length > 0 && this.props.carac[2].be
    const armureData = this.props.armure
    let tetePoints = 0
    let brasPoints = 0
    let corpsPoints = 0
    let torsePoints = 0
    let jambesPoints = 0

    armureData.map((armures) => {
      if (armures.couverture === "Tête") {
        tetePoints += armures.points + be
        return tetePoints
      }
      if (armures.couverture === "Bras") {
        brasPoints += armures.points + be;
        return brasPoints
      }
      if (armures.couverture === "Corps + Bras") {
        corpsPoints += armures.points + be;
        return corpsPoints
      }
      if (armures.couverture === "Corps") {
        torsePoints += armures.points + be;
        return torsePoints
      }
      if (armures.couverture === "Jambes") {
        jambesPoints += armures.points + be;
        return jambesPoints
      }
      return true
    })

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Points de ton armure</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed bordered hover striped >
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
                <td>{tetePoints}</td>
                <td>01 - 15</td>
              </tr>
              <tr>
                <td>Bras droit</td>
                <td>
                  {brasPoints + corpsPoints}
                </td>
                <td>16 - 35</td>
              </tr>
              <tr>
                <td>Bras gauche</td>
                <td>
                  {brasPoints + corpsPoints}
                </td>
                <td>35 - 55</td>
              </tr>
              <tr>
                <td>Corps</td>
                <td>
                  {corpsPoints + torsePoints}
                </td>
                <td>56 - 80</td>
              </tr>
              <tr>
                <td>Jambe droite</td>
                <td>{jambesPoints}</td>
                <td>81 - 90</td>
              </tr>
              <tr>
                <td>Jambe gauche</td>
                <td>{jambesPoints}</td>
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
