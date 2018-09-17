import React, { Component } from 'react';
import { Table, Panel, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Carac } from "../../components/personnage/Carac";
import CaracUpdate from "../../components/update/CaracUpdate";
import CaracUpdateMobile from "../../components/update/CaracUpdateMobile";
import { getCarac } from "../../actions/CaracAction";
import { updateMessage } from "../../hocs/updateMessage";


class CaracTable extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.props.getCarac(user, perso);

    this.state = {
      user: user,
      perso: perso,
      update: false
    }
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">{"Profil de " + this.state.perso}</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
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
                {this.state.update && <th>Update</th>}
              </tr>
            </thead>
            <tbody>
              { this.props.carac.map((carac, i) => this.state.update ? <CaracUpdate key={i} {...carac} /> : <Carac key={i} {...carac} />) }
            </tbody>
          </Table>
          { this.state.update ?
            this.props.carac.map((carac, i) => <CaracUpdateMobile key={i} {...carac} />) :
            <Table condensed bordered hover striped className="carac-table-mobile" >
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
                </tr>
              </thead>
              <tbody>
                { this.props.carac.map((carac, i) => <Carac key={i} {...carac} />) }
              </tbody>
            </Table>
          }
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    carac: state.carac.carac,
    modified: state.carac.payload,
    msg: state.carac.msg,
    style: state.carac.style
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCarac
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CaracTable));
