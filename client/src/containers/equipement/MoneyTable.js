import React, { Component } from 'react';
import { Well, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMoney, updateMoney } from "../../actions/MoneyAction";
import { Money } from "../../components/equipement/Money";

class MoneyTable extends Component {
    componentDidMount() {
        this.props.getMoney();
    }

    render() {
        return (
            <Well>
                <Table>
                    { this.props.money.map((money, i) => <Money key={i} {...money} get={this.props.getMoney}  update={this.props.updateMoney} />) }
                </Table>
            </Well>
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
        getMoney:getMoney,
        updateMoney:updateMoney
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable);
