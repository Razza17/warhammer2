import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompetenceBaseUpdate from '../../components/update/CompetenceBaseUpdate';
import { getCompBase, updateCompBase } from "../../actions/CompBaseAction";
import { updateMessage } from "../../hocs/updateMessage";

class CompBaseRecap extends Component {

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
    this.props.getCompBase(this.state.user, this.state.perso);
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  render() {
    return (
      <Panel header="Compétences de base" className="noPadding">
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
            {
              this.props.compBase.map((competenceB, i) => <CompetenceBaseUpdate key={i} {...competenceB} getCompBase={this.props.getCompBase} updateCompBase={this.props.updateCompBase}/> )
            }
          </tbody>
        </Table>
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
    getCompBase, updateCompBase
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompBaseRecap));
