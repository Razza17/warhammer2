import React, { Component } from 'react';
import { Button, ButtonGroup, Well } from 'react-bootstrap';
import { connect } from 'react-redux';


class Count extends Component {

    onIncrement(){
        if(this.props.name === "Fortune" && this.props.value < this.props.carac[0].pd) {
            let data = {
                "name":this.props.name,
                "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.name === "Blessure" && this.props.value < this.props.carac[0].b) {
            let data = {
              "name":this.props.name,
              "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else {
            let data = {
                "name":this.props.name,
                "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
    }

    onDecrement(){
        if(this.props.name === "Fortune" && this.props.value > 0) {
            let data = {
                "name":this.props.name,
                "value":this.props.value - 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.name === "Blessure" && this.props.value > -10) {
            let data = {
                "name":this.props.name,
                "value":this.props.value - 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.name === "Munitions" && this.props.value > 0) {
            let data = {
                "name":this.props.name,
                "value":this.props.value - 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
    }

    render() {
        return (
            <Well>
                <span>{this.props.name} : <strong>{this.props.value}
                    {this.props.name !== "Munitions" ? (this.props.value > 1 ? ' points ' : ' point ') : (this.props.value > 1 ? ' munitions ' : ' munition ')}</strong>
                    {this.props.name === "Fortune" && "sur " + this.props.carac[0].pd}
                    {this.props.name === "Blessure" && "sur " + this.props.carac[0].b}
                </span>
                <ButtonGroup style={{marginLeft: "20px"}}>
                    <Button bsStyle="danger" onClick={this.onDecrement.bind(this)}>-</Button>
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

export default connect(mapStateToProps)(Count);
