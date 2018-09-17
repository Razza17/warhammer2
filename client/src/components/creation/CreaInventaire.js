import React, {Component} from 'react';
import {Col, PanelGroup, Panel, Table, FormGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router-dom';

import { Inventaire } from "../../components/equipement/Inventaire";

import { postCount } from "../../actions/CountAction";
import { getInventaire, postInventaire } from "../../actions/InventaireAction";
import { postMoney } from "../../actions/MoneyAction";
import { getCarac } from "../../actions/CaracAction";

class CreaInventaire extends Component {

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
      activeKey: "3",
      nextPage: "/recap?pseudo="+user+"&perso="+perso
    }
  }

  handleSelect(activeKey) {
    this.setState({activeKey});
    this.props.getProfile(this.state.user, this.state.perso);
    this.props.getCompAvance(this.state.user, this.state.perso);
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

  postMoney() {
    const money = {
      couronnes: findDOMNode(this.refs.couronnes).value === "" ? 0 : findDOMNode(this.refs.couronnes).value,
      pistoles: findDOMNode(this.refs.pistoles).value === "" ? 0 : findDOMNode(this.refs.pistoles).value,
      sous: findDOMNode(this.refs.sous).value === "" ? 0 : findDOMNode(this.refs.sous).value,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postMoney(money);
    this.changePanel();
  }

  postMunition() {
    let fortune = "";
    let blessures = "";

    for (let i = 0; i < this.props.caracActuel.length; i++) {
      if (this.props.caracActuel[i].user === this.state.user && this.props.caracActuel[i].perso === this.state.perso && this.props.caracActuel[i].type === "actuel") {
        fortune = this.props.caracActuel[i].pd;
        blessures = this.props.caracActuel[i].b;
      }
    }

    const data = [
      {
        name: "Fortune",
        value: fortune,
        user: this.state.user,
        perso: this.state.perso
      },
      {
        name: "Blessure",
        value: blessures,
        user: this.state.user,
        perso: this.state.perso
      },
      {
        name: "Munitions",
        value: findDOMNode(this.refs.munitions).value === "" ? 0 : findDOMNode(this.refs.munitions).value,
        user: this.state.user,
        perso: this.state.perso
      }
    ]

    for (let j = 0; j < data.length; j++) {
      const eachData = {
        name: data[j].name,
        value: data[j].value,
        user: data[j].user,
        perso: data[j].perso
      }
      this.props.postCount(eachData);
    }

    this.changePanel();
  }

  postInventaire() {
    const inventaire = {
      nom: findDOMNode(this.refs.nomPostInventaire).value,
      quantite: findDOMNode(this.refs.quantitePostInventaire).value !== "" ? findDOMNode(this.refs.quantitePostInventaire).value : 0,
      encombrement: findDOMNode(this.refs.encPostInventaire).value !== "" ? findDOMNode(this.refs.encPostInventaire).value : 0,
      user: this.state.user,
      perso: this.state.perso
    };
    this.props.postInventaire(inventaire);
    this.props.getInventaire(this.state.user, this.state.perso);
    this.resetForm();
  }

  resetForm() {
    findDOMNode(this.refs.nomPostInventaire).value = "";
    findDOMNode(this.refs.quantitePostInventaire).value = "";
    findDOMNode(this.refs.encPostInventaire).value = "";
  }

  render() {
    return (
      <Col xs={12} md={6} mdOffset={3}>
        <PanelGroup id={this.state.activeKey} activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Monnaie</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped >
                <tbody>
                  <tr>
                    <td>
                      <FormGroup controlId="couronnes">
                        <FormControl
                          type='number'
                          placeholder='couronnes'
                          ref='couronnes' />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="pistoles">
                        <FormControl
                          type='number'
                          placeholder='pistoles'
                          ref='pistoles' />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="sous">
                        <FormControl
                          type='number'
                          placeholder='sous'
                          ref='sous' />
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button className="next-table" onClick={this.postMoney.bind(this)}>Passer aux Munitions</Button>
            </Panel.Body>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Munitions</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped >
                <tbody>
                  <tr>
                    <td>
                      <FormGroup controlId="munitions">
                        <FormControl
                          type='number'
                          placeholder='nombre de munitions'
                          ref='munitions' />
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button className="next-table" onClick={this.postMunition.bind(this)}>Passer à l'inventaire</Button>
            </Panel.Body>
          </Panel>

          <Panel className={this.state.activeKey === "3" ? "show" : "hide"} eventKey="3">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Inventaire</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped >
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th><span className="show-desktop">Quantité</span><span className="show-mobile">Qté</span></th>
                    <th><span className="show-desktop">Encombrement</span><span className="show-mobile">Enc</span></th>
                  </tr>
                </thead>
                <tbody>
                  { this.props.inventaire.map((inventaires, i) => <Inventaire key={i} {...inventaires}/>) }
                  <tr>
                    <td>
                      <FormGroup controlId="nomPostInventaire">
                        <FormControl
                          type='text'
                          placeholder='Nom'
                          ref='nomPostInventaire' />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="quantitePostInventaire">
                        <FormControl
                          type='number'
                          placeholder='Quantité'
                          ref='quantitePostInventaire' />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="encPostInventaire">
                        <FormControl
                          type='number'
                          placeholder='Encombrement'
                          ref='encPostInventaire' />
                      </FormGroup>
                    </td>
                    <td><Button onClick={this.postInventaire.bind(this)}>Ajouter</Button></td>
                  </tr>
                </tbody>
              </Table>
              <Button className='next-table'>
                <Link to={this.state.nextPage}>Récapitulatif</Link>
              </Button>
            </Panel.Body>
          </Panel>
        </PanelGroup>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count.count,
    inventaire: state.inventaire.inventaire,
    money: state.money.money,
    caracActuel: state.carac.carac
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postCount,
    getInventaire, postInventaire,
    postMoney,
    getCarac
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaInventaire);
