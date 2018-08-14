import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Button, PanelGroup, Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postCarac } from "../../actions/CaracAction";
import { getProfile } from "../../actions/ProfilAction";

class CreaCarac extends Component {

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
      basecc: null, basect: null, basef: null, basee: null, baseag: null, baseint: null, basefm: null, basesoc: null,
      basea: null, baseb: null, basebf: null, basebe: null, basem: null, basemag: null, basepf: null, basepd: null,
      caracBaseValidate: false,
      avcc: null, avct: null, avf: null, ave: null, avag: null, avint: null, avfm: null, avsoc: null,
      ava: null, avb: null, avbf: null, avbe: null, avm: null, avmag: null, avpf: null, avpd: null,
      caracAvanceValidate: false,
      accc: null, acct: null, acf: null, ace: null, acag: null, acint: null, acfm: null, acsoc: null,
      aca: null, acb: null, acbf: null, acbe: null, acm: null, acmag: null, acpf: null, acpd: null,
      caracActuelValidate: false
    }
  }

  handleBase() {
    let caracBase = {
      type: "base",
      cc: findDOMNode(this.refs.basecc).value,
      ct: findDOMNode(this.refs.basect).value,
      f: findDOMNode(this.refs.basef).value,
      e: findDOMNode(this.refs.basee).value,
      ag: findDOMNode(this.refs.baseag).value,
      int: findDOMNode(this.refs.baseint).value,
      fm: findDOMNode(this.refs.basefm).value,
      soc: findDOMNode(this.refs.basesoc).value,
      a: findDOMNode(this.refs.basea).value,
      b: findDOMNode(this.refs.baseb).value,
      bf: findDOMNode(this.refs.basebf).value,
      be: findDOMNode(this.refs.basebe).value,
      m: findDOMNode(this.refs.basem).value,
      mag: findDOMNode(this.refs.basemag).value,
      pf: findDOMNode(this.refs.basepf).value,
      pd: findDOMNode(this.refs.basepd).value,
      user: this.state.user,
      perso: this.state.perso
    };

    if(this.state.basecc === "success"
    && this.state.basect === "success"
    && this.state.basef === "success"
    && this.state.basee === "success"
    && this.state.baseag === "success"
    && this.state.baseint === "success"
    && this.state.basefm === "success"
    && this.state.basesoc === "success"
    && this.state.basea === "success"
    && this.state.baseb === "success"
    && this.state.basebf === "success"
    && this.state.basebe === "success"
    && this.state.basem === "success"
    && this.state.basemag === "success"
    && this.state.basepf === "success"
    && this.state.basepd === "success") {
      this.props.postCarac(caracBase);
      // Plier le Panel en court et déplier le Panel suivant
      let stateActiveKey = parseInt(this.state.activeKey, 10);
      let newActiveKey = stateActiveKey + 1;
      let string = newActiveKey.toString();
      this.setState({ activeKey: string, caracBaseValidate: true });
    } else {
      this.state.basecc === null && this.setState({ basecc: "error"});
      this.state.basect === null && this.setState({ basect: "error"});
      this.state.basef === null && this.setState({ basef: "error"});
      this.state.basee === null && this.setState({ basee: "error"});
      this.state.baseag === null && this.setState({ baseag: "error"});
      this.state.baseint === null && this.setState({ baseint: "error"});
      this.state.basefm === null && this.setState({ basefm: "error"});
      this.state.basesoc === null && this.setState({ basesoc: "error"});
      this.state.basea === null && this.setState({ basea: "error"});
      this.state.baseb === null && this.setState({ baseb: "error"});
      this.state.basebf === null && this.setState({ basebf: "error"});
      this.state.basebe === null && this.setState({ basebe: "error"});
      this.state.basem === null && this.setState({ basem: "error"});
      this.state.basemag === null && this.setState({ basemag: "error"});
      this.state.basepf === null && this.setState({ basepf: "error"});
      this.state.basepd === null && this.setState({ basepd: "error"});
      alert("Tu dois remplir tous les champs guerrier !");
    }
  }

  handleAvance() {
    let caracAvance = {
      type: "avance",
      cc: findDOMNode(this.refs.avcc).value,
      ct: findDOMNode(this.refs.avct).value,
      f: findDOMNode(this.refs.avf).value,
      e: findDOMNode(this.refs.ave).value,
      ag: findDOMNode(this.refs.avag).value,
      int: findDOMNode(this.refs.avint).value,
      fm: findDOMNode(this.refs.avfm).value,
      soc: findDOMNode(this.refs.avsoc).value,
      a: findDOMNode(this.refs.ava).value,
      b: findDOMNode(this.refs.avb).value,
      bf: findDOMNode(this.refs.avbf).value,
      be: findDOMNode(this.refs.avbe).value,
      m: findDOMNode(this.refs.avm).value,
      mag: findDOMNode(this.refs.avmag).value,
      pf: findDOMNode(this.refs.avpf).value,
      pd: findDOMNode(this.refs.avpd).value,
      user: this.state.user,
      perso: this.state.perso
    };

    if(this.state.avcc === "success"
    && this.state.avct === "success"
    && this.state.avf === "success"
    && this.state.ave === "success"
    && this.state.avag === "success"
    && this.state.avint === "success"
    && this.state.avfm === "success"
    && this.state.avsoc === "success"
    && this.state.ava === "success"
    && this.state.avb === "success"
    && this.state.avbf === "success"
    && this.state.avbe === "success"
    && this.state.avm === "success"
    && this.state.avmag === "success"
    && this.state.avpf === "success"
    && this.state.avpd === "success") {
      this.props.postCarac(caracAvance);
      // Plier le Panel en court et déplier le Panel suivant
      let stateActiveKey = parseInt(this.state.activeKey, 10);
      let newActiveKey = stateActiveKey + 1;
      let string = newActiveKey.toString();
      this.setState({ activeKey: string, caracAvanceValidate: true });
    } else {
      this.state.avcc === null && this.setState({ avcc: "error"});
      this.state.avct === null && this.setState({ avct: "error"});
      this.state.avf === null && this.setState({ avf: "error"});
      this.state.ave === null && this.setState({ ave: "error"});
      this.state.avag === null && this.setState({ avag: "error"});
      this.state.avint === null && this.setState({ avint: "error"});
      this.state.avfm === null && this.setState({ avfm: "error"});
      this.state.avsoc === null && this.setState({ avsoc: "error"});
      this.state.ava === null && this.setState({ ava: "error"});
      this.state.avb === null && this.setState({ avb: "error"});
      this.state.avbf === null && this.setState({ avbf: "error"});
      this.state.avbe === null && this.setState({ avbe: "error"});
      this.state.avm === null && this.setState({ avm: "error"});
      this.state.avmag === null && this.setState({ avmag: "error"});
      this.state.avpf === null && this.setState({ avpf: "error"});
      this.state.avpd === null && this.setState({ avpd: "error"});
      alert("Tu dois remplir tous les champs guerrier !");
    }
  }

  handleActuel() {
    let caracActuel = {
      type: "actuel",
      cc: findDOMNode(this.refs.accc).value,
      ct: findDOMNode(this.refs.acct).value,
      f: findDOMNode(this.refs.acf).value,
      e: findDOMNode(this.refs.ace).value,
      ag: findDOMNode(this.refs.acag).value,
      int: findDOMNode(this.refs.acint).value,
      fm: findDOMNode(this.refs.acfm).value,
      soc: findDOMNode(this.refs.acsoc).value,
      a: findDOMNode(this.refs.aca).value,
      b: findDOMNode(this.refs.acb).value,
      bf: findDOMNode(this.refs.acbf).value,
      be: findDOMNode(this.refs.acbe).value,
      m: findDOMNode(this.refs.acm).value,
      mag: findDOMNode(this.refs.acmag).value,
      pf: findDOMNode(this.refs.acpf).value,
      pd: findDOMNode(this.refs.acpd).value,
      user: this.state.user,
      perso: this.state.perso
    };

    if(this.state.accc === "success"
    && this.state.acct === "success"
    && this.state.acf === "success"
    && this.state.ace === "success"
    && this.state.acag === "success"
    && this.state.acint === "success"
    && this.state.acfm === "success"
    && this.state.acsoc === "success"
    && this.state.aca === "success"
    && this.state.acb === "success"
    && this.state.acbf === "success"
    && this.state.acbe === "success"
    && this.state.acm === "success"
    && this.state.acmag === "success"
    && this.state.acpf === "success"
    && this.state.acpd === "success") {
      this.props.postCarac(caracActuel);
      // Plier le Panel en court et déplier le Panel suivant
      let stateActiveKey = parseInt(this.state.activeKey, 10);
      let newActiveKey = stateActiveKey + 1;
      let string = newActiveKey.toString();
      this.setState({ activeKey: string, caracActuelValidate: true });
      window.location.assign(window.location.origin + "/creationComp" + window.location.search);
    } else {
      this.state.accc === null && this.setState({ accc: "error"});
      this.state.acct === null && this.setState({ acct: "error"});
      this.state.acf === null && this.setState({ acf: "error"});
      this.state.ace === null && this.setState({ ace: "error"});
      this.state.acag === null && this.setState({ acag: "error"});
      this.state.acint === null && this.setState({ acint: "error"});
      this.state.acfm === null && this.setState({ acfm: "error"});
      this.state.acsoc === null && this.setState({ acsoc: "error"});
      this.state.aca === null && this.setState({ aca: "error"});
      this.state.acb === null && this.setState({ acb: "error"});
      this.state.acbf === null && this.setState({ acbf: "error"});
      this.state.acbe === null && this.setState({ acbe: "error"});
      this.state.acm === null && this.setState({ acm: "error"});
      this.state.acmag === null && this.setState({ acmag: "error"});
      this.state.acpf === null && this.setState({ acpf: "error"});
      this.state.acpd === null && this.setState({ acpd: "error"});
      alert("Tu dois remplir tous les champs guerrier !");
    }
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    value !== "" ? this.setState({ [name]: "success" }) : this.setState({ [name]: "error" });
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
    this.props.getProfile(this.state.user, this.state.perso);
  }

  render() {
    return (
      <Col xs={12} md={6} mdOffset={3}>
        <PanelGroup id="panel-carac" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
          <Panel className={this.state.activeKey === "1" ? "show" : "hide"} eventKey="1">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Caractéristiques de base</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped fill>
                <thead>
                  <tr>
                    <th colSpan="9" className="uppercase">Profil Principal</th>
                  </tr>
                  <tr>
                    <th>CC</th>
                    <th>CT</th>
                    <th>F</th>
                    <th>E</th>
                    <th>Ag</th>
                    <th>Int</th>
                    <th>FM</th>
                    <th>Soc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup controlId="basecc">
                        <FormControl
                          type='text'
                          name='basecc'
                          ref='basecc'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basect">
                        <FormControl
                          type='text'
                          name='basect'
                          ref='basect'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basef">
                        <FormControl
                          type='text'
                          name='basef'
                          ref='basef'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basee">
                        <FormControl
                          type='text'
                          name='basee'
                          ref='basee'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="baseag">
                        <FormControl
                          type='text'
                          name='baseag'
                          ref='baseag'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="baseint">
                        <FormControl
                          type='text'
                          name='baseint'
                          ref='baseint'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basefm">
                        <FormControl
                          type='text'
                          name='basefm'
                          ref='basefm'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basesoc">
                        <FormControl
                          type='text'
                          name='basesoc'
                          ref='basesoc'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table condensed bordered hover striped fill>
                <thead>
                  <tr>
                    <th colSpan="9" className="uppercase">Profil Secondaire</th>
                  </tr>
                  <tr>
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
                  <tr>
                    <td>
                      <FormGroup controlId="basea">
                        <FormControl
                          type='text'
                          name='basea'
                          ref='basea'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="baseb">
                        <FormControl
                          type='text'
                          name='baseb'
                          ref='baseb'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basebf">
                        <FormControl
                          type='text'
                          name='basebf'
                          ref='basebf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basebe">
                        <FormControl
                          type='text'
                          name='basebe'
                          ref='basebe'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basem">
                        <FormControl
                          type='text'
                          name='basem'
                          ref='basem'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basemag">
                        <FormControl
                          type='text'
                          name='basemag'
                          ref='basemag'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basepf">
                        <FormControl
                          type='text'
                          name='basepf'
                          ref='basepf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="basepd">
                        <FormControl
                          type='text'
                          name='basepd'
                          ref='basepd'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button className="next-table" onClick={this.handleBase.bind(this)}>Passer aux Caractéristiques avancées</Button>
            </Panel.Body>
          </Panel>

          <Panel className={this.state.activeKey === "2" ? "show" : "hide"} eventKey="2">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Caractéristiques avancées</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped fill>
                <thead>
                  <tr>
                    <th colSpan="9" className="uppercase">Profil Principal</th>
                  </tr>
                  <tr>
                    <th>CC</th>
                    <th>CT</th>
                    <th>F</th>
                    <th>E</th>
                    <th>Ag</th>
                    <th>Int</th>
                    <th>FM</th>
                    <th>Soc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup controlId="avcc">
                        <FormControl
                          type='text'
                          name='avcc'
                          ref='avcc'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avct">
                        <FormControl
                          type='text'
                          name='avct'
                          ref='avct'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avf">
                        <FormControl
                          type='text'
                          name='avf'
                          ref='avf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="ave">
                        <FormControl
                          type='text'
                          name='ave'
                          ref='ave'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avag">
                        <FormControl
                          type='text'
                          name='avag'
                          ref='avag'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avint">
                        <FormControl
                          type='text'
                          name='avint'
                          ref='avint'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avfm">
                        <FormControl
                          type='text'
                          name='avfm'
                          ref='avfm'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avsoc">
                        <FormControl
                          type='text'
                          name='avsoc'
                          ref='avsoc'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table condensed bordered hover striped fill>
                <thead>
                  <tr>
                    <th colSpan="9" className="uppercase">Profil Secondaire</th>
                  </tr>
                  <tr>
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
                  <tr>
                    <td>
                      <FormGroup controlId="ava">
                        <FormControl
                          type='text'
                          name='ava'
                          ref='ava'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avb">
                        <FormControl
                          type='text'
                          name='avb'
                          ref='avb'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avbf">
                        <FormControl
                          type='text'
                          name='avbf'
                          ref='avbf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avbe">
                        <FormControl
                          type='text'
                          name='avbe'
                          ref='avbe'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avm">
                        <FormControl
                          type='text'
                          name='avm'
                          ref='avm'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avmag">
                        <FormControl
                          type='text'
                          name='avmag'
                          ref='avmag'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avpf">
                        <FormControl
                          type='text'
                          name='avpf'
                          ref='avpf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="avpd">
                        <FormControl
                          type='text'
                          name='avpd'
                          ref='avpd'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button className="next-table" onClick={this.handleAvance.bind(this)}>Passer aux caractéristiques actuelles</Button>
            </Panel.Body>
          </Panel>

          <Panel className={this.state.activeKey === "3" ? "show" : "hide"} eventKey="3">
            <Panel.Heading>
              <Panel.Title componentClass="h2">Caractéristiques actuelles</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Table condensed bordered hover striped fill>
                <thead>
                  <tr>
                    <th colSpan="9" className="uppercase">Profil Principal</th>
                  </tr>
                  <tr>
                    <th>CC</th>
                    <th>CT</th>
                    <th>F</th>
                    <th>E</th>
                    <th>Ag</th>
                    <th>Int</th>
                    <th>FM</th>
                    <th>Soc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <FormGroup controlId="accc">
                        <FormControl
                          type='text'
                          name='accc'
                          ref='accc'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acct">
                        <FormControl
                          type='text'
                          name='acct'
                          ref='acct'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acf">
                        <FormControl
                          type='text'
                          name='acf'
                          ref='acf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="ace">
                        <FormControl
                          type='text'
                          name='ace'
                          ref='ace'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acag">
                        <FormControl
                          type='text'
                          name='acag'
                          ref='acag'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acint">
                        <FormControl
                          type='text'
                          name='acint'
                          ref='acint'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acfm">
                        <FormControl
                          type='text'
                          name='acfm'
                          ref='acfm'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acsoc">
                        <FormControl
                          type='text'
                          name='acsoc'
                          ref='acsoc'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Table condensed bordered hover striped fill>
                <thead>
                  <tr>
                    <th colSpan="9" className="uppercase">Profil Secondaire</th>
                  </tr>
                  <tr>
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
                  <tr>
                    <td>
                      <FormGroup controlId="aca">
                        <FormControl
                          type='text'
                          name='aca'
                          ref='aca'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acb">
                        <FormControl
                          type='text'
                          name='acb'
                          ref='acb'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acbf">
                        <FormControl
                          type='text'
                          name='acbf'
                          ref='acbf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acbe">
                        <FormControl
                          type='text'
                          name='acbe'
                          ref='acbe'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acm">
                        <FormControl
                          type='text'
                          name='acm'
                          ref='acm'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acmag">
                        <FormControl
                          type='text'
                          name='acmag'
                          ref='acmag'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acpf">
                        <FormControl
                          type='text'
                          name='acpf'
                          ref='acpf'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="acpd">
                        <FormControl
                          type='text'
                          name='acpd'
                          ref='acpd'
                          onChange={this.onChange.bind(this)}
                          />
                        <FormControl.Feedback/>
                      </FormGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button className="next-table" onClick={this.handleActuel.bind(this)}>Passer aux compétences</Button>
            </Panel.Body>
          </Panel>
        </PanelGroup>
      </Col>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postCarac,
    getProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaCarac);
