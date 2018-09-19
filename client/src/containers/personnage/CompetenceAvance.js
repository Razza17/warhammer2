import React, { Component } from 'react';
import { Table, Panel, Button, FormGroup, FormControl, Checkbox, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getCompAvance, postCompAvance } from "../../actions/CompAvanceAction";
import Competence from "../../components/personnage/Competence";
import CompetenceAvanceUpdate from '../../components/update/CompetenceAvanceUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class CompetenceAvance extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPerso = localStorage.getItem('userPerso');

    this.props.getCompAvance(userID, userPerso);

    this.state = {
      userID: userID,
      userPerso: userPerso,
      update: false,
      acquisCheck: false,
      dixCheck: false,
      vingtCheck: false
    }
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  changeAcquis() {
    this.setState({
      acquisCheck: !this.state.acquisCheck
    })
  }

  changeDix() {
    this.setState({
      dixCheck: !this.state.dixCheck
    })
  }

  changeVingt() {
    this.setState({
      vingtCheck: !this.state.vingtCheck
    })
  }

  handlePost() {
    let postCompAvance = [{
      nom: findDOMNode(this.refs.nomPostCompAvance).value,
      carac: findDOMNode(this.refs.caracPostCompAvance).value,
      acquis: this.state.acquisCheck,
      dix: this.state.dixCheck,
      vingt: this.state.vingtCheck,
      bonus: findDOMNode(this.refs.bonusPostCompAvance).value,
      user: this.state.userID,
      perso: this.state.userPerso
    }];
    this.props.postCompAvance(postCompAvance);
    this.resetForm();
  }

  resetForm() {
    findDOMNode(this.refs.nomPostCompAvance).value = "";
    findDOMNode(this.refs.caracPostCompAvance).value = "";
    findDOMNode(this.refs.bonusPostCompAvance).value = "";
    this.setState({
      acquisCheck: false,
      dixCheck: false,
      vingtCheck: false
    })
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Compétences Avancées</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                <th>Carac.</th>
                <th><span className="show-desktop">Acquis</span><span className="show-mobile">Acq.</span></th>
                <th>+10%</th>
                <th>+20%</th>
                <th><span className="show-desktop">Bonus</span><span className="show-mobile">Bon.</span></th>
                <th><span className="show-desktop">Total</span><span className="show-mobile">Tot.</span></th>
                {this.state.update && <th>Update</th>}
              </tr>
            </thead>
            <tbody>
              { this.props.compAvance.map((competenceA, i) => this.state.update ? <CompetenceAvanceUpdate key={i} {...competenceA} /> : <Competence key={i} {...competenceA} />) }
          {this.state.update &&
            <tr>
              <td>
                <FormGroup controlId="nomPostCompAvance">
                  <FormControl
                    type='text'
                    placeholder='Nom'
                    ref='nomPostCompAvance' />
                </FormGroup>
              </td>
              <td>
                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass='select' placeholder='Caractéristiques' ref='caracPostCompAvance'>
                    <option value='select'>Caractéristiques</option>
                    <option value='(F)'>Force (F)</option>
                    <option value='(Soc)'>Sociabilité (Soc)</option>
                    <option value='(Ag)'>Agilité (Ag)</option>
                    <option value='(Int)'>Intélligence (Int)</option>
                    <option value='(E)'>Endurance (E)</option>
                  </FormControl>
                </FormGroup>
              </td>
              <td>
                <Checkbox onClick={this.changeAcquis.bind(this)} />
              </td>
              <td>
                <Checkbox onClick={this.changeDix.bind(this)} />
              </td>
              <td>
                <Checkbox onClick={this.changeVingt.bind(this)} />
              </td>
              <td>
                <FormGroup controlId="bonusPostCompAvance">
                  <FormControl
                    type='text'
                    placeholder='Bonus'
                    ref='bonusPostCompAvance' />
                </FormGroup>
              </td>
              <td colSpan="2">
                <Button onClick={this.handlePost.bind(this)}>Ajouter</Button>
              </td>
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
    compAvance: state.compAvance.compAvance,
    modified: state.compAvance.payload,
    msg: state.compAvance.msg,
    style: state.compAvance.style
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCompAvance, postCompAvance
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompetenceAvance));
