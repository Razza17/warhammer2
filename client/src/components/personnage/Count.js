import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Panel, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCount } from "../../actions/CountAction";

class Count extends Component {

  onIncrement(){
    if(this.props.name === "Fortune" && this.props.value < this.props.caracActuel[2].pd) {
      let data = {
        "_id":this.props._id,
        "name":this.props.name,
        "value":this.props.value + 1
      };
      this.props.updateCount(this.props._id, data);
    }
    else if(this.props.name === "Blessure" && this.props.value < this.props.caracActuel[2].b) {
      let data = {
        "_id":this.props._id,
        "name":this.props.name,
        "value":this.props.value + 1
      };
      this.props.updateCount(this.props._id, data);
    }
    else if(this.props.name === "Munitions") {
      let data = {
        "_id":this.props._id,
        "name":this.props.name,
        "value":this.props.value + 1
      };
      this.props.updateCount(this.props._id, data);
    }
  }

  onDecrement(){
    if(this.props.name === "Fortune" && this.props.value > 0) {
      let data = {
        "_id":this.props._id,
        "name":this.props.name,
        "value":this.props.value - 1
      };
      this.props.updateCount(this.props._id, data);
    }
    else if(this.props.name === "Blessure" && this.props.value > -10) {
      let data = {
        "_id":this.props._id,
        "name":this.props.name,
        "value":this.props.value - 1
      };
      this.props.updateCount(this.props._id, data);
    }
    else if(this.props.name === "Munitions" && this.props.value > 0) {
      let data = {
        "_id":this.props._id,
        "name":this.props.name,
        "value":this.props.value - 1
      };
      this.props.updateCount(this.props._id, data);
    }
  }

  render() {

    const pointDestin = this.props.caracActuel.length > 0 && this.props.caracActuel[2].pd;
    const blessure = this.props.caracActuel.length > 0 && this.props.caracActuel[2].b;

    return (
      <Col xs={4}>
        <Panel className="count">
          <Panel.Heading>
            <Panel.Title componentClass="h2">{this.props.name !== "Munitions" ? (this.props.name === "Fortune" ? "Points de Fortune" : "Blessures") : "Munitions"}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span>
              <strong>
                {this.props.name !== "Munitions" ? (this.props.name === "Fortune" ? this.props.value : this.props.value) : this.props.value}
                {this.props.name !== "Munitions" ? (this.props.value > 1 ? ' points ' : ' point ') : (this.props.value > 1 ? ' munitions ' : ' munition ')}
              </strong>
              {this.props.name === "Fortune" && "sur " + pointDestin}
              {this.props.name === "Blessure" && "sur " + blessure}
            </span>
            <ButtonGroup style={{marginLeft: "20px"}}>
              <Button bsStyle="danger" onClick={this.onDecrement.bind(this)}><Glyphicon glyph="minus" /></Button>
              <Button bsStyle="success" onClick={this.onIncrement.bind(this)}><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    caracActuel: state.carac.carac
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateCount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
