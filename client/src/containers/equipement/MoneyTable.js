import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMoney, updateMoney } from "../../actions/MoneyAction";
import { Money } from "../../components/equipement/Money";

class MoneyTable extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso
    }
  }

  componentWillMount() {
    this.props.getMoney(this.state.user, this.state.perso);
  }

  render() {
    return (
      <Panel header="Monnaies">
        <Table fill>
          { this.props.money.map((money, i) => <Money key={i} {...money} get={this.props.getMoney}  update={this.props.updateMoney} />) }
        </Table>
      </Panel>
    )
  }
}

function mapStateToProps(state) {
  return {
    money: state.money.money
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getMoney,
    updateMoney
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable);
