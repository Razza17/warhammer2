import React, {Component} from 'react';
import {Col, PanelGroup, Panel, Table, FormGroup, FormControl, Checkbox, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router-dom';

import Competence from '../../components/personnage/Competence';
import {Talent} from "../../components/personnage/Talent";
import { Folie } from "../../components/equipement/Folie";

import {getCompBase, postCompBase} from "../../actions/CompBaseAction";
import {getCompAvance, postCompAvance} from "../../actions/CompAvanceAction";
import {getTalent, postTalent} from "../../actions/TalentAction";
import {getFolie, postFolie} from "../../actions/FolieAction";

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
      activeKey: "1",
      nextPage: "/creationArme?pseudo="+user+"&perso="+perso
    }
  }

  handleSelect(activeKey) {
    this.setState({activeKey});
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

  postTalents() {
    let newTalent = {
      nom: findDOMNode(this.refs.nomPostTalent).value,
      desc: findDOMNode(this.refs.descPostTalent).value,
      competence: findDOMNode(this.refs.compPostTalent).value,
      bonus: findDOMNode(this.refs.bonusPostTalent).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postTalent(newTalent);
    this.props.getTalent();
    this.resetForm("talents");
  }

  postFolies() {
    const folie = {
      nom: findDOMNode(this.refs.nomPostFolie).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postFolie(folie);
    this.props.getFolie();
    this.resetForm("folies");
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
    } else if (form === "base") {
      findDOMNode(this.refs.nomPostCompAvance).value = "";
      findDOMNode(this.refs.caracPostCompAvance).value = "";
      findDOMNode(this.refs.bonusPostCompAvance).value = "";
      this.setState({
        acquisCheck: false,
        dixCheck: false,
        vingtCheck: false
      })
    } else if (form === "talents") {
      findDOMNode(this.refs.nomPostTalent).value = "";
      findDOMNode(this.refs.descPostTalent).value = "";
      findDOMNode(this.refs.compPostTalent).value = "";
      findDOMNode(this.refs.bonusPostTalent).value = "";
    } else {
      findDOMNode(this.refs.nomPostFolie).value = "";
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
        <h2 className="text-center uppercase">
          {this.state.activeKey === "1" ? "Compétences de base" : this.state.activeKey === "2" ? "Compétences de avancées" : this.state.activeKey === "3" ? "Talents" : "Folies"}
        </h2>
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1">
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
              </tbody>
            </Table>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2">
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

          <Panel className={this.state.activeKey === "3" ? "show" : "hide"} eventKey="3">
            <Table condensed hover striped fill>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th><span className="show-desktop">Description</span><span className="show-mobile">Desc</span></th>
                  <th><span className="show-desktop">Compétences</span><span className="show-mobile">Comp</span></th>
                  <th>Bonus</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.props.talent.map((talents, i) => <Talent key={i} {...talents} />) }
                <tr>
                  <td>
                    <FormGroup controlId="nomPostTalent">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomPostTalent' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="descPostTalent">
                      <FormControl
                        type='text'
                        placeholder='Description'
                        ref='descPostTalent' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="compPostTalent">
                      <FormControl
                        type='text'
                        placeholder='Compétence'
                        ref='compPostTalent' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="bonusPostTalent">
                      <FormControl
                        type='text'
                        placeholder='Bonus'
                        ref='bonusPostTalent' />
                    </FormGroup>
                  </td>
                  <td><Button onClick={this.postTalents.bind(this)}>Ajouter</Button></td>
                </tr>
              </tbody>
            </Table>
          </Panel>

          <Panel className={this.state.activeKey === "4" ? "show" : "hide"} eventKey="4">
            <Table condensed bordered hover striped fill>
              <thead>
                <tr>
                  <th>Nom</th>
                  {this.state.update && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                { this.props.folie.map((folie, i) => <Folie key={i} {...folie}/>) }
                <tr>
                  <td>
                    <FormGroup controlId="nomPostFolie">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomPostFolie' />
                    </FormGroup>
                  </td>
                  <td><Button onClick={this.postFolies.bind(this)}>Ajouter</Button></td>
                </tr>
              </tbody>
            </Table>
          </Panel>
        </PanelGroup>

        {this.state.activeKey === "1" ?
          <Button className='next-table show'onClick={this.changePanel.bind(this)}>
            Passer aux compétences avancées
          </Button> :
          this.state.activeKey === "2" ?
          <Button className='next-table show' onClick={this.changePanel.bind(this)}>
            Passer aux talents
          </Button> :
          this.state.activeKey === "3" ?
          <Button className='next-table show' onClick={this.changePanel.bind(this)}>
            Passer aux folies
          </Button> :
          <Button className='next-table show'>
            <Link to={this.state.nextPage}>Passer aux armes</Link>
          </Button>
        }
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile.profile,
    compAvance: state.compAvance.compAvance,
    compBase: state.compBase.compBase,
    talent: state.talent.talent,
    folie: state.folie.folie
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCompBase,
    postCompBase,
    getCompAvance,
    postCompAvance,
    getTalent,
    postTalent,
    getFolie,
    postFolie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaCompTable);
