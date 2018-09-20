import React, {Component} from 'react';
import {Col, PanelGroup, Panel, Table, FormGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router-dom';

import { Armes } from '../../components/equipement/Armes';
import { Armure } from '../../components/equipement/Armure';

import { postArme } from "../../actions/ArmeAction";
import { postArmure } from "../../actions/ArmureAction";

class CreaArme extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.state = {
      userID: userID,
      userPersoID: userPersoID,
      activeKey: "1"
    }
  }

  handleSelect(activeKey) {
    this.setState({activeKey});
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
    const arme = {
      nom: findDOMNode(this.refs.nomArme).value,
      encombrement: findDOMNode(this.refs.encArme).value,
      degats: findDOMNode(this.refs.degatsArme).value,
      portee: findDOMNode(this.refs.porteeArme).value,
      rechargement: findDOMNode(this.refs.rechargementArme).value !== "" ? findDOMNode(this.refs.rechargementArme).value : 0,
      attributs: findDOMNode(this.refs.attributsArme).value,
      user: this.state.userID,
      perso: this.state.userPersoID
    };
    this.props.postArme(arme);
    this.resetForm("arme");
  }

  postArmure() {
    const armure = {
      nom: findDOMNode(this.refs.nomArmure).value,
      encombrement: findDOMNode(this.refs.encArmure).value,
      couverture: findDOMNode(this.refs.couvArmure).value,
      points: findDOMNode(this.refs.pointsArmure).value,
      user: this.state.userID,
      perso: this.state.userPersoID
    };
    this.props.postArmure(armure);
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
        <PanelGroup id={this.state.activeKey} activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Armes de ton personnage</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped >
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
              <Button className='next-table show' onClick={this.changePanel.bind(this)}>
                Passer aux Armures
              </Button>
            </Panel.Body>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Armures de ton personnage</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped >
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
              <Button className='next-table show'>
                <Link to="/creationInventaire">Passer à l'inventaire</Link>
              </Button>
            </Panel.Body>
          </Panel>
        </PanelGroup>
      </Col>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postArme,
    postArmure
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreaArme);
