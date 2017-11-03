import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';


export class Money extends Component {

    onIncrement(){
        if(this.props.nom === "couronnes") {
            let data = {
                "nom":this.props.nom,
                "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.nom === "pistoles") {
            let data = {
              "nom":this.props.nom,
              "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else {
            let data = {
                "nom":this.props.nom,
                "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
    }

    onDecrement(){
        if(this.props.nom === "couronnes" && this.props.value > 0) {
            let data = {
                "nom":this.props.nom,
                "value":this.props.value - 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.nom === "pistoles" && this.props.value > 0) {
            let data = {
                "nom":this.props.nom,
                "value":this.props.value - 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.nom === "sous" && this.props.value > 0) {
            let data = {
                "nom":this.props.nom,
                "value":this.props.value - 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
    }

    render() {
        return (
            <tr>
                <td>
                    <strong>
                        {this.props.nom === "couronnes" ? (this.props.value > 1 ? "Couronnes d'or" : "Couronne d'or") : this.props.nom === "pistoles" ? (this.props.value > 1 ? "Pistoles d'argent" : "Pistole d'argent") : "Sous"}
                    </strong>
                </td>
                <td>{this.props.value}</td>
                <td>
                    <ButtonGroup>
                        <Button onClick={this.onDecrement.bind(this)} bsStyle="danger">-</Button>
                        <Button onClick={this.onIncrement.bind(this)} bsStyle="success">+</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
