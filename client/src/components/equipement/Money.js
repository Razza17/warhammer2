import React, { Component } from 'react';
import { Button, ButtonGroup, Badge, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateMoney } from "../../actions/MoneyAction";

class Money extends Component {

  onIncrement(type) {
    if (type === 'Couronnes') {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes + 1,
        pistoles: this.props.pistoles,
        sous: this.props.sous
      };
      this.props.updateMoney(this.props._id, data);
    } else if (type === 'Pistoles') {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles + 1,
        sous: this.props.sous
      };
      this.props.updateMoney(this.props._id, data);
    } else {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles,
        sous: this.props.sous + 1
      };
      this.props.updateMoney(this.props._id, data);
    }
  }

  onDecrement(type) {
    if (type === 'Couronnes') {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes - 1,
        pistoles: this.props.pistoles,
        sous: this.props.sous
      };
      this.props.updateMoney(this.props._id, data);
    } else if (type === 'Pistoles') {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles - 1,
        sous: this.props.sous
      };
      this.props.updateMoney(this.props._id, data);
    } else {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles,
        sous: this.props.sous - 1
      };
      this.props.updateMoney(this.props._id, data);
    }
  }

  handlePistolesToCouronnes() {
    if(this.props.pistoles > 20) {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes + 1,
        pistoles: this.props.pistoles - 20,
        sous: this.props.sous
      };
      this.props.updateMoney(this.props._id, data);
    }
  }

  handleCouronnesToPistoles() {
    if(this.props.couronnes > 1) {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes - 1,
        pistoles: this.props.pistoles + 20,
        sous: this.props.sous
      };
      this.props.updateMoney(this.props._id, data);
    }
  }

  handleSousToPistoles() {
    if(this.props.sous > 12) {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles + 1,
        sous: this.props.sous - 12
      };
      this.props.updateMoney(this.props._id, data);
    }
  }

  handlePistolesToSous() {
    if(this.props.pistoles > 1) {
      let data = {
        _id: this.props._id,
        couronnes: this.props.couronnes,
        pistoles: this.props.pistoles - 1,
        sous: this.props.sous + 12
      };
      this.props.updateMoney(this.props._id, data);
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
              <Button onClick={this.onDecrement.bind(this, "Couronnes")} bsStyle="danger"><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.onIncrement.bind(this, "Couronnes")} bsStyle="success"><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </td>
          <td>&nbsp;</td>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrement.bind(this, "Pistoles")} bsStyle="danger"><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.onIncrement.bind(this, "Pistoles")} bsStyle="success"><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </td>
          <td>&nbsp;</td>
          <td>
            <ButtonGroup>
              <Button onClick={this.onDecrement.bind(this, "Sous")} bsStyle="danger"><Glyphicon glyph="minus" /></Button>
              <Button onClick={this.onIncrement.bind(this, "Sous")} bsStyle="success"><Glyphicon glyph="plus" /></Button>
            </ButtonGroup>
          </td>
        </tr>
      </tbody>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updateMoney
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Money)
