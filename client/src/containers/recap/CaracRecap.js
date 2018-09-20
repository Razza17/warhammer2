import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CaracUpdate from "../../components/update/CaracUpdate";
import CaracUpdateMobile from "../../components/update/CaracUpdateMobile";

import { updateMessage } from "../../hocs/updateMessage";

import { getCarac } from "../../actions/CaracAction";

class CaracRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getCarac(userID, userPersoID);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Caractéristiques</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed bordered hover striped className="carac-table-desktop" >
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th colSpan="8">Profil Principal</th>
                <th colSpan="8">Profil Secondaire</th>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <th>CC</th>
                <th>CT</th>
                <th>F</th>
                <th>E</th>
                <th>Ag</th>
                <th>Int</th>
                <th>FM</th>
                <th>Soc</th>
                <th>A</th>
                <th>B</th>
                <th>BF</th>
                <th>BE</th>
                <th>M</th>
                <th>Mag</th>
                <th>PF</th>
                <th>PD</th>
                <th>Modifier</th>
              </tr>
            </thead>
            <tbody>
              { this.props.carac.map((carac, i) => <CaracUpdate key={i} {...carac} />) }
            </tbody>
          </Table>
          { this.props.carac.map((carac, i) => <CaracUpdateMobile key={i} {...carac} />) }
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    carac: state.carac.carac,
    modified: state.carac.payload,
    msg: state.carac.msg,
    style: state.carac.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCarac
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CaracRecap));
