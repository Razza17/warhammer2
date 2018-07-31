import React, {Component} from 'react';
import {Col, PanelGroup, Panel, Table, FormGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router-dom';

import { Armes } from '../../components/equipement/Armes';
import { Armure } from '../../components/equipement/Armure';

import { getArme, postArme } from "../../actions/ArmeAction";
import { getArmure, postArmure } from "../../actions/ArmureAction";

class CreaArme extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      activeKey: "1",
      nextPage: "/creationInventaire?pseudo="+user+"&perso="+perso
    }
  }

  handleSelect(activeKey) {
    this.setState({activeKey});
    this.props.getProfile();
    this.props.getCompAvance();
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

  postArme() {
    const arme = [{
      nom: findDOMNode(this.refs.nomArme).value,
      encombrement: findDOMNode(this.refs.encArme).value,
      degats: findDOMNode(this.refs.degatsArme).value,
      portee: findDOMNode(this.refs.porteeArme).value,
      rechargement: findDOMNode(this.refs.rechargementArme).value,
      attributs: findDOMNode(this.refs.attributsArme).value,
      user: this.state.user,
      perso: this.state.perso
    }];
    this.props.postArme(arme);
    this.props.getArme();
    this.resetForm("arme");
  }

  postArmure() {
    const armure = {
      nom: findDOMNode(this.refs.nomArmure).value,
      encombrement: findDOMNode(this.refs.encArmure).value,
      couverture: findDOMNode(this.refs.couvArmure).value,
      points: findDOMNode(this.refs.pointsArmure).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postArmure(armure);
    this.props.getArmure();
    this.resetForm("armure");
  }

  resetForm(form) {
    if (form === "arme") {
      findDOMNode(this.refs.nomArme).value = "";
      findDOMNode(this.refs.encArme).value = "";
      findDOMNode(this.refs.degatsArme).value = "";
      findDOMNode(this.refs.porteeArme).value = "";
      findDOMNode(this.refs.rechargementArme).value = "";
      findDOMNode(this.refs.attributsArme).value = "";
    } else {
      findDOMNode(this.refs.nomArmure).value = "";
      findDOMNode(this.refs.encArmure).value = "";
      findDOMNode(this.refs.couvArmure).value = "Couverture";
      findDOMNode(this.refs.pointsArmure).value = "";
    }
  }

  render() {
    return (
      <Col xs={12} md={6} mdOffset={3}>
        <h2 className="text-center uppercase">
          {this.state.activeKey === "1" ? "Armes de ton personnage" : "Armures de ton personnage"}
        </h2>
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1">
            <Table condensed bordered hover striped fill>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Enc</th>
                  <th><span className="show-desktop">Dégâts</span><span className="show-mobile">Dég</span></th>
                  <th>Portée</th>
                  <th><span className="show-desktop">Rechargement</span><span className="show-mobile">Recharg</span></th>
                  <th>Attributs</th>
                </tr>
              </thead>
              <tbody>
                { this.props.arme.map((armes, i) => <Armes key={i} {...armes} />) }
                <tr>
                  <td>
                    <FormGroup controlId="nomArme">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomArme' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="encArme">
                      <FormControl
                        type='number'
                        placeholder='Encombrement'
                        ref='encArme' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="degatsArme">
                      <FormControl
                        type='number'
                        placeholder='Dégâts'
                        ref='degatsArme' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="porteeArme">
                      <FormControl
                        type='text'
                        placeholder='Portée'
                        ref='porteeArme' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="rechargementArme">
                      <FormControl
                        type='number'
                        placeholder='Rechargement'
                        ref='rechargementArme' />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup controlId="attributsArme">
                      <FormControl
                        type='text'
                        placeholder='Attributs'
                        ref='attributsArme' />
                    </FormGroup>
                  </td>
                  <td><Button onClick={this.postArme.bind(this)}>Ajouter</Button></td>
                </tr>
              </tbody>
            </Table>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2">
            <Table condensed bordered hover striped fill>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Enc</th>
                  <th><span className="show-desktop">Couverture</span><span className="show-mobile">Couv</span></th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                { this.props.armure.map((armures, i) => <Armure key={i} {...armures} />) }
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
                  <td><Button onClick={this.postArmure.bind(this)}>Ajouter</Button></td>
                </tr>
            </tbody>
          </Table>
        </Panel>
      </PanelGroup>

      {this.state.activeKey === '1' ?
        <Button className='next-table show' onClick={this.changePanel.bind(this)}>
          Passer aux Armures
        </Button> :
        <Button className='next-table show'>
          <Link to={this.state.nextPage}>Passer à l'inventaire</Link>
        </Button>
      }
    </Col>
  )
}
}

function mapStateToProps(state) {
  return {
    arme: state.arme.arme,
    armure: state.armure.armure
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getArme, postArme,
    getArmure, postArmure
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaArme);
