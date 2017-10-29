import React, { Component } from 'react';
import { Button, ButtonGroup, Well } from 'react-bootstrap';
import { connect } from 'react-redux';


class Fortune extends Component {

    onIncrement(){
        if(this.props.name === "Fortune") {
            console.log('Fortune id : ', this.props._id);
        } else if(this.props.name === "Blessure") {
            console.log('Blessure id : ', this.props._id);
        } else {
            console.log('Munitions id : ', this.props._id);
        }
    }

    /*onDecrement(_id, quantity){
        if(quantity > 1) {
            this.props.updateCart(_id, -1);
        }
    }*/

    render() {
        return (
            <Well>
                <span>{this.props.name} : <strong>{this.props.value}
                    {this.props.name !== "Munitions" ? (this.props.value > 1 ? ' points ' : ' point ') : (this.props.value > 1 ? ' munitions ' : ' munition ')}</strong>
                    {this.props.name === "Fortune" && "sur " + this.props.carac[0].pd}
                    {this.props.name === "Blessure" && "sur " + this.props.carac[0].b}
                </span>
                <ButtonGroup style={{marginLeft: "20px"}}>
                    <Button bsStyle="danger">-</Button>
                    <Button bsStyle="success" onClick={this.onIncrement.bind(this)}>+</Button>
                </ButtonGroup>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return {
        carac: state.caracActuel.caracActuel
    }
}

export default connect(mapStateToProps)(Fortune);
