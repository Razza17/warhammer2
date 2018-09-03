import React, { Component } from 'react';
import { Table, Panel, Button, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getArmure, postArmure } from "../../actions/ArmureAction";
import { Armure } from '../../components/equipement/Armure';
import ArmureUpdate from '../../components/update/ArmureUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class ArmureTable extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.props.getArmure(user, perso);

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

  handleSubmit() {
    const armure = {
      nom: findDOMNode(this.refs.nomArmure).value,
      encombrement: findDOMNode(this.refs.encArmure).value,
      couverture: findDOMNode(this.refs.couvArmure).value,
      points: findDOMNode(this.refs.pointsArmure).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postArmure(armure);
    this.resetForm();
  }

  resetForm(){
    findDOMNode(this.refs.nomArmure).value = "";
    findDOMNode(this.refs.encArmure).value = "";
    findDOMNode(this.refs.couvArmure).value = "Couverture";
    findDOMNode(this.refs.pointsArmure).value = "";
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Armures</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed bordered hover striped fill>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Enc</th>
                <th><span className="show-desktop">Couverture</span><span className="show-mobile">Couv</span></th>
                <th>Points</th>
                {this.state.update && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              { this.props.armure.map((armure, i) => this.state.update ? <ArmureUpdate key={armure._id} {...armure} getArmure={this.props.getArmure} /> : <Armure key={i} {...armure} />) }
              {this.state.update &&
                <tr>
                  <td>
                    <FormGroup controlId="nomArmure">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomArmure' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="encArmure">
                      <FormControl
                        type='number'
                        placeholder='Encombrement'
                        ref='encArmure' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="formControlsSelect">
                      <FormControl componentClass='select' placeholder='Couverture' ref='couvArmure'>
                        <option value='select'>Couverture</option>
                        <option value='Tête'>Tête</option>
                        <option value='Bras'>Bras</option>
                        <option value='Corps'>Corps</option>
                        <option value='Corps + Bras'>Corps + Bras</option>
                        <option value='Jambes'>Jambes</option>
                      </FormControl>
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="pointsArmure">
                      <FormControl
                        type='number'
                        placeholder='Points'
                        ref='pointsArmure' />
                    </FormGroup>
                  </td>
                  <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Ajouter</Button></td>
                </tr>
              }
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
    modified: state.armure.payload,
    msg: state.armure.msg,
    style: state.armure.style
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getArmure, postArmure
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ArmureTable));
