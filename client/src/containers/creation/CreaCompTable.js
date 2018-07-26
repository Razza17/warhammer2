import React, {Component} from 'react';
import {Col, PanelGroup, Panel, Table, FormGroup, FormControl, Checkbox, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';

import Competence from '../../components/personnage/Competence';

import {getProfile} from "../../actions/ProfilAction";
import {getCompBase, postCompBase} from "../../actions/CompBaseAction";
import {getCompAvance, postCompAvance} from "../../actions/CompAvanceAction";

class CreaCompTable extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      acquisCheck: false,
      dixCheck: false,
      vingtCheck: false,
      creaBonusCompBase: 0,
      activeKey: "1"
    }
  }

  handleSelect(activeKey) {
    this.setState({activeKey});
    this.props.getProfile();
    this.props.getCompAvance();
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

  postCompBase() {
    let compBase = {
      nom: findDOMNode(this.refs.nomPostCompBase).value,
      carac: findDOMNode(this.refs.caracPostCompBase).value,
      acquis: this.state.acquisCheck,
      dix: this.state.dixCheck,
      vingt: this.state.vingtCheck,
      bonus: findDOMNode(this.refs.bonusPostCompBase).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postCompBase(compBase);
    this.props.getCompBase();
    this.resetForm("base");
  }

  postCompAvance() {
    let postCompAvance = {
      nom: findDOMNode(this.refs.nomPostCompAvance).value,
      carac: findDOMNode(this.refs.caracPostCompAvance).value,
      acquis: this.state.acquisCheck,
      dix: this.state.dixCheck,
      vingt: this.state.vingtCheck,
      bonus: findDOMNode(this.refs.bonusPostCompAvance).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postCompAvance(postCompAvance);
    this.props.getCompAvance();
    this.resetForm("avance");
  }

  resetForm(form) {
    if (form === "base") {
      findDOMNode(this.refs.nomPostCompBase).value = "";
      findDOMNode(this.refs.caracPostCompBase).value = "";
      findDOMNode(this.refs.bonusPostCompBase).value = "";
      this.setState({
        acquisCheck: false,
        dixCheck: false,
        vingtCheck: false
      })
    } else {
      findDOMNode(this.refs.nomPostCompAvance).value = "";
      findDOMNode(this.refs.caracPostCompAvance).value = "";
      findDOMNode(this.refs.bonusPostCompAvance).value = "";
      this.setState({
        acquisCheck: false,
        dixCheck: false,
        vingtCheck: false
      })
    }
  }

  changePanel() {
    // Plier le Panel en court et déplier le Panel suivant
    let stateActiveKey = parseInt(this.state.activeKey, 10);
    let newActiveKey = stateActiveKey + 1;
    let stringKey = newActiveKey.toString();
    this.setState({ activeKey: stringKey });
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    value !== "" ? this.setState({[name]: "success"}) : this.setState({[name]: "error"});
  }

  render() {
    return (
      <Col xs={12} md={6} mdOffset={3}>
        <h2 className="text-center uppercase">Compétences de base et avancées</h2>
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1" header="Compétences de base">
            <Table condensed hover striped className="border" fill>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Carac.</th>
                  <th>Acquis</th>
                  <th>+10%</th>
                  <th>+20%</th>
                  <th>Bonus</th>
                </tr>
              </thead>
              <tbody>
                { this.props.compBase.map((competenceB, i) => <Competence key={i} {...competenceB} />) }
                <tr>
                  <td>
                    <FormGroup controlId="nomPostCompBase">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomPostCompBase'/>
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="formControlsSelect">
                      <FormControl componentClass='select' placeholder='Caractéristiques'
                        ref='caracPostCompBase'>
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
                    <Checkbox checked={this.state.acquisCheck} onChange={this.changeAcquis.bind(this)}/>
                  </td>
                  <td>
                    <Checkbox checked={this.state.dixCheck} onChange={this.changeDix.bind(this)}/>
                  </td>
                  <td>
                    <Checkbox checked={this.state.vingtCheck} onChange={this.changeVingt.bind(this)}/>
                  </td>
                  <td>
                    <FormGroup controlId="bonusPostCompBase">
                      <FormControl
                        type='text'
                        placeholder='Bonus'
                        ref='bonusPostCompBase'/>
                    </FormGroup>
                  </td>
                  <td colSpan="2">
                    <Button onClick={this.postCompBase.bind(this)}>Ajouter</Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={7}>
                    <Button onClick={this.changePanel.bind(this)}>Passer aux compétences avancées</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2" header="Compétences avancées">
            <Table condensed hover striped fill>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Carac.</th>
                  <th><span className="show-desktop">Acquis</span><span
                    className="show-mobile">Acq.</span></th>
                  <th>+10%</th>
                  <th>+20%</th>
                  <th><span className="show-desktop">Bonus</span><span className="show-mobile">Bon.</span></th>
                  <th><span className="show-desktop">Total</span><span className="show-mobile">Tot.</span></th>
                </tr>
              </thead>
              <tbody>
                { this.props.compAvance.map((competenceA, i) => <Competence key={i} {...competenceA} />) }
                <tr>
                  <td>
                    <FormGroup controlId="nomPostCompAvance">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomPostCompAvance'/>
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="formControlsSelect">
                      <FormControl componentClass='select' placeholder='Caractéristiques'
                        ref='caracPostCompAvance'>
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
                    <Checkbox checked={this.state.acquisCheck} onChange={this.changeAcquis.bind(this)}/>
                  </td>
                  <td>
                    <Checkbox checked={this.state.dixCheck} onChange={this.changeDix.bind(this)}/>
                  </td>
                  <td>
                    <Checkbox checked={this.state.vingtCheck} onChange={this.changeVingt.bind(this)}/>
                  </td>
                  <td>
                    <FormGroup controlId="bonusPostCompAvance">
                      <FormControl
                        type='text'
                        placeholder='Bonus'
                        ref='bonusPostCompAvance'/>
                    </FormGroup>
                  </td>
                  <td colSpan="2">
                    <Button onClick={this.postCompAvance.bind(this)}>Ajouter</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel>
        </PanelGroup>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.profile,
    compAvance: state.compAvance.compAvance,
    compBase: state.compBase.compBase
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile,
    getCompBase,
    postCompBase,
    getCompAvance,
    postCompAvance
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaCompTable);
