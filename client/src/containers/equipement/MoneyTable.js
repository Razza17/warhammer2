import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMoney, updateMoney } from "../../actions/MoneyAction";
import { Money } from "../../components/equipement/Money";

class MoneyTable extends Component {
    componentWillMount() {
        this.props.getMoney();
    }

    render() {
        return (
            <Panel header="Monnaies" bsStyle="info">
                <Table fill>
                    { this.props.money.map((money, i) => <Money key={i} {...money} get={this.props.getMoney}  update={this.props.updateMoney} />) }
                </Table>
            </Panel>
        );
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
