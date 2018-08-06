import React, { Component } from 'react';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';


export class Money extends Component {

  onIncrementCouronnes(){
    let data = {
      couronnes: this.props.couronnes + 1,
      pistoles: this.props.pistoles,
      sous: this.props.sous
    };
    this.props.update(this.props._id, data);
    this.props.get();
  }

  onDecrementCouronnes(){
    if(this.props.couronnes > 0) {
      let data = {
        couronnes: this.props.couronnes - 1,
        pistoles: this.props.pistoles,
        sous: this.props.sous
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  onIncrementPistoles(){
    let data = {
      couronnes: this.props.couronnes,
      pistoles: this.props.pistoles + 1,
      sous: this.props.sous
    };
    this.props.update(this.props._id, data);
    this.props.get();
  }

  onDecrementPistoles(){
    if(this.props.pistoles > 0) {
      let data = {
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles - 1,
        sous: this.props.sous
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  onIncrementSous(){
    let data = {
      couronnes: this.props.couronnes,
      pistoles: this.props.pistoles,
      sous: this.props.sous + 1
    };
    this.props.update(this.props._id, data);
    this.props.get();
  }

  onDecrementSous(){
    if(this.props.sous > 0) {
      let data = {
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles,
        sous: this.props.sous - 1
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  handlePistolesToCouronnes() {
    if(this.props.pistoles > 20) {
      let data = {
        couronnes: this.props.couronnes + 1,
        pistoles: this.props.pistoles - 20,
        sous: this.props.sous
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  handleCouronnesToPistoles() {
    if(this.props.couronnes > 1) {
      let data = {
        couronnes: this.props.couronnes - 1,
        pistoles: this.props.pistoles + 20,
        sous: this.props.sous
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  handleSousToPistoles() {
    if(this.props.sous > 12) {
      let data = {
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles + 1,
        sous: this.props.sous - 12
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  handlePistolesToSous() {
    if(this.props.pistoles > 1) {
      let data = {
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles - 1,
        sous: this.props.sous + 12
      };
      this.props.update(this.props._id, data);
      this.props.get();
    }
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <strong>
              {this.props.couronnes > 1 ? "Couronnes d'or" : "Couronne d'or"}
            </strong>
          </td>
          <td>&nbsp;</td>
          <td>
            <strong>
              {this.props.pistoles > 1 ? "Pistoles d'argent" : "Pistole d'argent"}
            </strong>
          </td>
          <td>&nbsp;</td>
          <td><strong>Sous de cuivre</strong></td>
        </tr>
        <tr>
          <td>{this.props.couronnes}</td>
          <td>
            <Badge onClick={this.handlePistolesToCouronnes.bind(this)}>&lt;</Badge>
            <span> 20 </span>
            <Badge onClick={this.handleCouronnesToPistoles.bind(this)}>&gt;</Badge>
          </td>
          <td>{this.props.pistoles}</td>
          <td>
            <Badge onClick={this.handleSousToPistoles.bind(this)}>&lt;</Badge>
            <span> 12 </span>
            <Badge onClick={this.handlePistolesToSous.bind(this)}>&gt;</Badge>
          </td>
          <td>{this.props.sous}</td>
        </tr>
        <tr>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrementCouronnes.bind(this)} bsStyle="danger">-</Button>
              <Button onClick={this.onIncrementCouronnes.bind(this)} bsStyle="success">+</Button>
            </ButtonGroup>
          </td>
          <td>&nbsp;</td>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrementPistoles.bind(this)} bsStyle="danger">-</Button>
              <Button onClick={this.onIncrementPistoles.bind(this)} bsStyle="success">+</Button>
            </ButtonGroup>
          </td>
          <td>&nbsp;</td>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrementSous.bind(this)} bsStyle="danger">-</Button>
              <Button onClick={this.onIncrementSous.bind(this)} bsStyle="success">+</Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    )
  }
}
