import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCarac, updateCarac } from "../../actions/CaracAction";
import { CaracUpdate } from "../../components/update/CaracUpdate";
import { updateMessage } from "../../hocs/updateMessage";


class CaracTableUpdate extends Component {
  componentWillMount() {
    this.props.getCarac();
  }

  render() {
    return (
      <Panel collapsible header="Profil du personnage">
        <Table condensed bordered hover striped className="carac-table-desktop" fill>
          <thead>
            <tr>
              <th colSpan="9">Profil Principal</th>
              <th colSpan="9">Profil Secondaire</th>
            </tr>
            <tr>
              <th>Type</th>
              <th>CC</th>
              <th>CT</th>
              <th>F</th>
              <th>E</th>
              <th>Ag</th>
              <th>Int</th>
              <th>FM</th>
              <th>Soc</th>
              <th>A</th>
              <th>B</th>
              <th>BF</th>
              <th>BE</th>
              <th>M</th>
              <th>Mag</th>
              <th>PF</th>
              <th>PD</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.props.carac.map((carac, i) => <CaracUpdate key={i}
            getCarac={this.props.getCarac}
            updateCarac={this.props.updateCarac}
            {...carac}/>)
          }
        </tbody>
      </Table>
    </Panel>
  )
}
}

function mapStateToProps(state){
  return {
    carac: state.carac.carac,
    modified: state.carac.payload,
    msg: state.carac.msg,
    style: state.carac.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCarac,
    updateCarac
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CaracTableUpdate));
