import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { CaracUpdate } from "../../components/update/CaracUpdate";
import { CaracUpdateMobile } from "../../components/update/CaracUpdateMobile";

import { updateMessage } from "../../hocs/updateMessage";

import { updateCarac, getCarac } from "../../actions/CaracAction";

class CaracRecap extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      showAlert: false,
      alertStyle: "success",
      alertMessage: ""
    }
  }

  componentWillMount() {
    this.props.getCarac(this.state.user, this.state.perso);
  }

  updateCarac() {
    let id = findDOMNode(this.refs.countId).value;
    let newData = {
      name: "Munitions",
      value: findDOMNode(this.refs.countValue).value
    };

    if (findDOMNode(this.refs.countValue).value !== "") {
      this.props.updateCarac(id, newData);
      this.props.getCarac(this.state.user, this.state.perso);
      this.setState({
        showAlert: true,
        alertStyle: "success",
        alertMessage: "Your Profile has been successfully updated"
      })

      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2500);
    } else {
      this.setState({
        showAlert: true,
        alertStyle: "danger",
        alertMessage: "Oups something went wrong ! Maybe try again ;-)"
      })

      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2500);
    }
  }

  render() {
    return (
      <Panel header="Profil du personnage" className="noPadding">
        <Table condensed bordered hover striped className="carac-table-desktop" fill>
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
            { this.props.carac.map((carac, i) => <CaracUpdate key={i} {...carac} getCarac={this.props.getCarac} updateCarac={this.props.updateCarac}/>) }
          </tbody>
        </Table>
        { this.props.carac.map((carac, i) => <CaracUpdateMobile key={i} {...carac} getCarac={this.props.getCarac} updateCarac={this.props.updateCarac}/>) }
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
    getCarac, updateCarac
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CaracRecap));
