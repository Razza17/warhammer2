import React, { Component } from 'react';
import { Button, ButtonGroup, Well, Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    coIncrement,
    coDecrement,
    paIncrement,
    paDecrement,
    removeCo,
    addCo,
    removePa,
    addPa,
    removeSo,
    addSo
} from "../../actions/MoneyAction";

class MoneyTable extends Component {

    couronneToPistole() {
        (this.props.couronne > 0 &&
            this.props.coDecrement(this.props.couronne, this.props.pistole)
        )
    }

    pistoleToCouronne() {
        (this.props.pistole >= 20 &&
            this.props.coIncrement(this.props.couronne, this.props.pistole)
        )
    }

    pistoleToSous() {
        (this.props.pistole > 0 &&
            this.props.paDecrement(this.props.pistole, this.props.sous)
        )
    }

    sousToPistole() {
        (this.props.sous >= 12 &&
            this.props.paIncrement(this.props.pistole, this.props.sous)
        )
    }

    removeCouronne() {
        (this.props.couronne > 0 && this.props.removeCo(this.props.couronne))
    }

    addCouronne() {
        this.props.addCo(this.props.couronne)
    }

    removePistole() {
        (this.props.pistole > 0 && this.props.removePa(this.props.pistole))
    }

    addPistole() {
        this.props.addPa(this.props.pistole)
    }

    removeSous() {
        (this.props.sous > 0 && this.props.removeSo(this.props.sous))
    }

    addSous() {
        this.props.addSo(this.props.sous)
    }

    render() {
        return (
            <Well>
                <Table>
                    <thead>
                        <tr>
                            <th className="text-center">{this.props.couronne > 1 ? "Couronnes d'or" : "Couronne d'or"}</th>
                            <th className="text-center">{this.props.pistole > 1 ? "Pistoles d'argent" : "Pistole d'argent"}</th>
                            <th className="text-center">Sous de cuivre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center"><strong>{this.props.couronne}</strong></td>
                            <td className="text-center"><strong>{this.props.pistole}</strong></td>
                            <td className="text-center"><strong>{this.props.sous}</strong></td>
                        </tr>
                        <tr>
                            <td className="text-center">
                                <ButtonGroup>
                                    <Button bsStyle="danger" onClick={this.removeCouronne.bind(this)}>-</Button>
                                    <Button bsStyle="success" onClick={this.addCouronne.bind(this)}>+</Button>
                                </ButtonGroup>
                            </td>
                            <td className="text-center">
                                <ButtonGroup>
                                    <Button bsStyle="danger" onClick={this.removePistole.bind(this)}>-</Button>
                                    <Button bsStyle="success" onClick={this.addPistole.bind(this)}>+</Button>
                                </ButtonGroup>
                            </td>
                            <td className="text-center">
                                <ButtonGroup>
                                    <Button bsStyle="danger" onClick={this.removeSous.bind(this)}>-</Button>
                                    <Button bsStyle="success" onClick={this.addSous.bind(this)}>+</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="text-center">
                                <ButtonGroup>
                                    <Button onClick={this.pistoleToCouronne.bind(this)}>+ 1 couronne</Button>
                                    <Button onClick={this.couronneToPistole.bind(this)}>+ 20 pistoles </Button>
                                    <Button onClick={this.sousToPistole.bind(this)}>+ 1 pisotle</Button>
                                    <Button onClick={this.pistoleToSous.bind(this)}>+ 12 sous</Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return {
        couronne: state.couronne.couronne,
        pistole: state.pistole.pistole,
        sous: state.sous.sous
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        coIncrement,
        coDecrement,
        paIncrement,
        paDecrement,
        removeCo,
        addCo,
        removePa,
        addPa,
        removeSo,
        addSo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable);
