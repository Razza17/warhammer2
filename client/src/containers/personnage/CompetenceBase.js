import React, { Component } from 'react';
import { Table, Panel, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Competence from "../../components/personnage/Competence";
import CompetenceBaseUpdate from '../../components/update/CompetenceBaseUpdate';
import { getCompBase, updateCompBase } from "../../actions/CompBaseAction";
import { updateMessage } from "../../hocs/updateMessage";

class CompetenceBase extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.props.getCompBase(user, perso);

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

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Compétences de base</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed hover striped fill>
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
              { this.props.compBase.map((competenceB, i) => this.state.update ? <CompetenceBaseUpdate key={i} {...competenceB} getCompBase={this.props.getCompBase} updateCompBase={this.props.updateCompBase}/> : <Competence key={i} {...competenceB}/>) }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    compBase: state.compBase.compBase,
    modified: state.compBase.payload,
    msg: state.compBase.msg,
    style: state.compBase.style
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getCompBase, updateCompBase
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompetenceBase));
