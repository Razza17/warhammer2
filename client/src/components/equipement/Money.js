import React, { Component } from 'react';
import { Button, ButtonGroup, Badge, Glyphicon } from 'react-bootstrap';


export class Money extends Component {

  onIncrementCouronnes(){
    let data = {
      couronnes: this.props.couronnes + 1,
      pistoles: this.props.pistoles,
      sous: this.props.sous
    };
    this.props.update(this.props._id, data);
    this.props.get(this.props.user, this.props.perso);
  }

  onDecrementCouronnes(){
    if(this.props.couronnes > 0) {
      let data = {
        couronnes: this.props.couronnes - 1,
        pistoles: this.props.pistoles,
        sous: this.props.sous
      };
      this.props.update(this.props._id, data);
      this.props.get(this.props.user, this.props.perso);
    }
  }

  onIncrementPistoles(){
    let data = {
      couronnes: this.props.couronnes,
      pistoles: this.props.pistoles + 1,
      sous: this.props.sous
    };
    this.props.update(this.props._id, data);
    this.props.get(this.props.user, this.props.perso);
  }

  onDecrementPistoles(){
    if(this.props.pistoles > 0) {
      let data = {
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles - 1,
        sous: this.props.sous
      };
      this.props.update(this.props._id, data);
      this.props.get(this.props.user, this.props.perso);
    }
  }

  onIncrementSous(){
    let data = {
      couronnes: this.props.couronnes,
      pistoles: this.props.pistoles,
      sous: this.props.sous + 1
    };
    this.props.update(this.props._id, data);
    this.props.get(this.props.user, this.props.perso);
  }

  onDecrementSous(){
    if(this.props.sous > 0) {
      let data = {
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles,
        sous: this.props.sous - 1
      };
      this.props.update(this.props._id, data);
      this.props.get(this.props.user, this.props.perso);
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
      this.props.get(this.props.user, this.props.perso);
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
      this.props.get(this.props.user, this.props.perso);
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
      this.props.get(this.props.user, this.props.perso);
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
      this.props.get(this.props.user, this.props.perso);
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
            <Badge onClick={this.handlePistolesToCouronnes.bind(this)}><Glyphicon glyph="menu-left" /></Badge>
            <span> 20 </span>
            <Badge onClick={this.handleCouronnesToPistoles.bind(this)}><Glyphicon glyph="menu-right" /></Badge>
          </td>
          <td>{this.props.pistoles}</td>
          <td>
            <Badge onClick={this.handleSousToPistoles.bind(this)}><Glyphicon glyph="menu-left" /></Badge>
            <span> 12 </span>
            <Badge onClick={this.handlePistolesToSous.bind(this)}><Glyphicon glyph="menu-right" /></Badge>
          </td>
          <td>{this.props.sous}</td>
        </tr>
        <tr>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrementCouronnes.bind(this)} bsStyle="danger"><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.onIncrementCouronnes.bind(this)} bsStyle="success"><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </td>
          <td>&nbsp;</td>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrementPistoles.bind(this)} bsStyle="danger"><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.onIncrementPistoles.bind(this)} bsStyle="success"><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </td>
          <td>&nbsp;</td>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrementSous.bind(this)} bsStyle="danger"><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.onIncrementSous.bind(this)} bsStyle="success"><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    )
  }
}
