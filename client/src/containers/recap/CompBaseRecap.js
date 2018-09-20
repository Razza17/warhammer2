import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompetenceBaseUpdate from '../../components/update/CompetenceBaseUpdate';
import { getCompBase } from "../../actions/CompBaseAction";
import { updateMessage } from "../../hocs/updateMessage";

class CompBaseRecap extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getCompBase(userID, userPersoID);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Compétences de base</Panel.Title>
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
              { this.props.compBase.map((competenceB, i) => <CompetenceBaseUpdate key={i} {...competenceB} />) }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    compBase: state.compBase.compBase,
    modified: state.compBase.payload,
    msg: state.compBase.msg,
    style: state.compBase.style
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getCompBase
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompBaseRecap));
