import React, {Component} from 'react';
import {Col, PanelGroup, Panel, Table, FormGroup, FormControl, Checkbox, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';

import CompetenceData from '../../data/Competence';
import CreaCompBase from '../../components/creation/CreaCompBase';
import Competence from '../../components/personnage/Competence';
import {getProfile} from "../../actions/ProfilAction";
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
      creaBonusCompBase: "0",
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

  handlePost() {
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

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    value !== "" ? this.setState({[name]: "success"}) : this.setState({[name]: "error"});
  }

  postBase = () => {
    this.child.handleSave();
  };

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
                {
                  CompetenceData.competenceB.map((competenceB, i) => <CreaCompBase user={this.state.user} perso={this.state.perso} key={i} {...competenceB} />)
                }
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
                {
                  this.props.compAvance.map((competenceA, i) => <Competence key={i} {...competenceA} />)
                }
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
                    <Button onClick={this.handlePost.bind(this)}>Add</Button>
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
    compAvance: state.compAvance.compAvance
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile,
    getCompAvance,
    postCompAvance
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaCompTable);
