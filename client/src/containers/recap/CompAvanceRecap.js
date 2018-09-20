import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompetenceAvanceUpdate from '../../components/update/CompetenceAvanceUpdate';
import { getCompAvance } from "../../actions/CompAvanceAction";
import { updateMessage } from "../../hocs/updateMessage";

class CompAvanceRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getCompAvance(userID, userPersoID);
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
              </tr>
            </thead>
            <tbody>
              { this.props.compAvance.map((competenceB, i) => <CompetenceAvanceUpdate key={i} {...competenceB} />) }
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
    getCompAvance
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompAvanceRecap));
