import React, { Component } from 'react';
import { Button, ButtonGroup, Well } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { coIncrement, coDecrement, paIncrement, paDecrement } from "../../actions/MoneyAction";

class MoneyTable extends Component {

    couronneToPistole(couronne, pistole) {
        (this.props.couronne > 0 &&
            this.props.coDecrement(this.props.couronne, this.props.pistole)
        )
    }

    pistoleToCouronne(couronne, pistole) {
        (this.props.pistole >= 20 &&
            this.props.coIncrement(this.props.couronne, this.props.pistole)
        )
    }

    pistoleToSous(pistole, sous) {
        (this.props.pistole > 0 &&
            this.props.paDecrement(this.props.pistole, this.props.sous)
        )
    }

    sousToPistole(pistole, sous) {
        (this.props.sous >= 12 &&
            this.props.paIncrement(this.props.pistole, this.props.sous)
        )
    }

    render() {
        return (
            <Well>
                <div>
                    <span>{this.props.couronne > 1 ? "Couronnes d'or" : "Couronne d'or"} : <strong>{this.props.couronne}</strong></span>
                    <ButtonGroup style={{marginLeft: "20px"}}>
                        <Button onClick={this.pistoleToCouronne.bind(this)}>+ 1</Button>
                        <Button onClick={this.couronneToPistole.bind(this)}>+ 20</Button>
                    </ButtonGroup>
                    <span style={{marginLeft: "20px"}}>{this.props.pistole > 1 ? "Pistoles d'argent" : "Pistole d'argent"} : <strong>{this.props.pistole}</strong></span>
                    <ButtonGroup style={{marginLeft: "20px"}}>
                        <Button onClick={this.sousToPistole.bind(this)}>+ 1</Button>
                        <Button onClick={this.pistoleToSous.bind(this)}>+ 12</Button>
                    </ButtonGroup>
                    <span style={{marginLeft: "20px"}}>Sous de cuivre : <strong>{this.props.sous}</strong></span>
                </div>
                <div style={{marginTop: "20px"}}>
                    <ButtonGroup style={{margin: "auto"}}>
                        <Button onClick={this.pistoleToCouronne.bind(this)}>20 pistoles pour 1 courone</Button>&nbsp;
                        <Button onClick={this.couronneToPistole.bind(this)}>1 couronne pour 20 pistoles</Button>
                        <Button onClick={this.sousToPistole.bind(this)}>12 sous pour 1 pistoles</Button>
                        <Button onClick={this.pistoleToSous.bind(this)}>1 pisotle pour 12 sous</Button>
                    </ButtonGroup>

                </div>
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
        paDecrement
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable);
