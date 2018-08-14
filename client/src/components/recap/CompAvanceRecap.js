import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompetenceAvanceUpdate from '../../components/update/CompetenceAvanceUpdate';
import { getCompAvance, updateCompAvance } from "../../actions/CompAvanceAction";
import { updateMessage } from "../../hocs/updateMessage";

class CompAvanceRecap extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      update: false
    }
  }

  componentWillMount() {
    this.props.getCompAvance(this.state.user, this.state.perso);
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
          <Panel.Title>Compétences Avancées</Panel.Title>
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
              </tr>
            </thead>
            <tbody>
              { this.props.compAvance.map((competenceB, i) => <CompetenceAvanceUpdate key={i} {...competenceB} getCompAvance={this.props.getCompAvance} updateCompAvance={this.props.updateCompAvance} user={this.state.user} perso={this.state.perso}/>) }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    compAvance: state.compAvance.compAvance,
    modified: state.compAvance.payload,
    msg: state.compAvance.msg,
    style: state.compAvance.style
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getCompAvance, updateCompAvance
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompAvanceRecap));
