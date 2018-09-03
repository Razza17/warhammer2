import React, { Component } from 'react';
import { Col, Button, ButtonGroup, Panel, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class Count extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];
    let fortune = this.props.name === "Fortune" ? this.props.value : 0;
    let blessure = this.props.name === "Blessure" ? this.props.value : 0;
    let munitions = this.props.name === "Munitions" ? this.props.value : 0;

    this.state = {
      user: user,
      perso: perso,
      update: false,
      fortune: fortune,
      blessure: blessure,
      munitions: munitions
    }
  }

  onIncrement(){
    if(this.props.name === "Fortune" && this.state.fortune < this.props.caracActuel[2].pd) {
      let data = {
        "value":this.state.fortune + 1
      };
      this.props.update(this.props._id, data);
      this.setState({fortune: this.state.fortune + 1});
    }
    else if(this.props.name === "Blessure" && this.state.blessure < this.props.caracActuel[2].b) {
      let data = {
        "value":this.state.blessure + 1
      };
      this.props.update(this.props._id, data);
      this.setState({blessure: this.state.blessure + 1});
    }
    else if(this.props.name === "Munitions") {
      let data = {
        "value":this.state.munitions + 1
      };
      this.props.update(this.props._id, data);
      this.setState({munitions: this.state.munitions + 1});
    }
  }

  onDecrement(){
    if(this.props.name === "Fortune" && this.state.fortune > 0) {
      let data = {
        "value":this.state.fortune - 1
      };
      this.props.update(this.props._id, data);
      this.setState({fortune: this.state.fortune - 1});
    }
    else if(this.props.name === "Blessure" && this.state.blessure > -10) {
      let data = {
        "value":this.state.blessure - 1
      };
      this.props.update(this.props._id, data);
      this.setState({blessure: this.state.blessure - 1});
    }
    else if(this.props.name === "Munitions" && this.state.munitions > 0) {
      let data = {
        "value":this.state.munitions - 1
      };
      this.props.update(this.props._id, data);
      this.setState({munitions: this.state.munitions - 1});
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
                {this.props.name !== "Munitions" ? (this.props.name === "Fortune" ? this.state.fortune : this.state.blessure) : this.state.munitions}
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

export default connect(mapStateToProps)(Count);
