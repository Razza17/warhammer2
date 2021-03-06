import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMoney } from "../../actions/MoneyAction";
import Money from "../../components/equipement/Money";

class MoneyTable extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getMoney(userID, userPersoID);
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Monnaies</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Table  className="moneyTable">
            { this.props.money.map((money, i) => <Money key={i} {...money} />) }
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    money: state.money.money
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getMoney
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable);
