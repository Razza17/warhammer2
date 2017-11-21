import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Panel, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class Count extends Component {

    onIncrement(){
        if(this.props.name === "Fortune" && this.props.value < this.props.caracActuel[2].pd) {
            let data = {
                "name":this.props.name,
                "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.name === "Blessure" && this.props.value < this.props.caracActuel[2].b) {
            let data = {
              "name":this.props.name,
              "value":this.props.value + 1
            };
            this.props.update(this.props._id, data);
            this.props.get();
        }
        else if(this.props.name === "Munitions") {
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
            <Col xs={4} lg={12}>
                <Panel className="count" header={this.props.name !== "Munitions" ? (this.props.name === "Fortune" ? "Points de Fortune" : "Blessures") : "Munitions"}>
                    <span><strong>{this.props.value}
                        {this.props.name !== "Munitions" ? (this.props.value > 1 ? ' points ' : ' point ') : (this.props.value > 1 ? ' munitions ' : ' munition ')}</strong>
                        {this.props.name === "Fortune" && "sur " + this.props.caracActuel[2].pd}
                        {this.props.name === "Blessure" && "sur " + this.props.caracActuel[2].b}
                    </span>
                    <ButtonGroup style={{marginLeft: "20px"}}>
                        <Button bsStyle="danger" onClick={this.onDecrement.bind(this)}><Glyphicon glyph="minus" /></Button>
                        <Button bsStyle="success" onClick={this.onIncrement.bind(this)}><Glyphicon glyph="plus" /></Button>
                    </ButtonGroup>
                </Panel>
            </Col>
        );
    }
}

function mapStateToProps(state) {
    return {
        caracActuel: state.carac.carac
    }
}

export default connect(mapStateToProps)(Count);
