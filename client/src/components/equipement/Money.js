import React, { Component } from 'react';
import { Button, ButtonGroup, Badge, Glyphicon } from 'react-bootstrap';


export class Money extends Component {

  constructor(props) {
    super(props);

    this.state = {
      couronnes: this.props.couronnes,
      pistoles: this.props.pistoles,
      sous: this.props.sous
    }
  }

  onIncrement(type) {
    if (type === 'Couronnes') {
      this.setState({couronnes: this.state.couronnes + 1});
      let data = {
        couronnes: this.state.couronnes + 1,
        pistoles: this.state.pistoles,
        sous: this.state.sous
      };
      this.props.update(this.props._id, data);
    } else if (type === 'Pistoles') {
      this.setState({pistoles: this.state.pistoles + 1});
      let data = {
        couronnes: this.state.couronnes,
        pistoles: this.state.pistoles + 1,
        sous: this.state.sous
      };
      this.props.update(this.props._id, data);
    } else {
      this.setState({sous: this.state.sous + 1});
      let data = {
        couronnes: this.state.couronnes,
        pistoles: this.state.pistoles,
        sous: this.state.sous + 1
      };
      this.props.update(this.props._id, data);
    }
  }

  onDecrement(type) {
    if (type === 'Couronnes') {
      this.setState({couronnes: this.state.couronnes - 1});
      let data = {
        couronnes: this.state.couronnes - 1,
        pistoles: this.state.pistoles,
        sous: this.state.sous
      };
      this.props.update(this.props._id, data);
    } else if (type === 'Pistoles') {
      this.setState({pistoles: this.state.pistoles - 1});
      let data = {
        couronnes: this.state.couronnes,
        pistoles: this.state.pistoles - 1,
        sous: this.state.sous
      };
      this.props.update(this.props._id, data);
    } else {
      this.setState({sous: this.state.sous - 1});
      let data = {
        couronnes: this.state.couronnes,
        pistoles: this.state.pistoles,
        sous: this.state.sous - 1
      };
      this.props.update(this.props._id, data);
    }
  }

  handlePistolesToCouronnes() {
    if(this.state.pistoles > 20) {
      let data = {
        couronnes: this.state.couronnes + 1,
        pistoles: this.state.pistoles - 20,
        sous: this.state.sous
      };
      this.props.update(this.props._id, data);
      this.setState({couronnes: this.state.couronnes + 1, pistoles: this.state.pistoles - 20});
    }
  }

  handleCouronnesToPistoles() {
    if(this.state.couronnes > 1) {
      let data = {
        couronnes: this.state.couronnes - 1,
        pistoles: this.state.pistoles + 20,
        sous: this.state.sous
      };
      this.props.update(this.props._id, data);
      this.setState({couronnes: this.state.couronnes - 1, pistoles: this.state.pistoles + 20});
    }
  }

  handleSousToPistoles() {
    if(this.state.sous > 12) {
      let data = {
        couronnes: this.state.couronnes,
        pistoles: this.state.pistoles + 1,
        sous: this.state.sous - 12
      };
      this.props.update(this.props._id, data);
      this.setState({pistoles: this.state.pistoles + 1, sous: this.state.sous - 12});
    }
  }

  handlePistolesToSous() {
    if(this.state.pistoles > 1) {
      let data = {
        couronnes: this.state.couronnes,
        pistoles: this.state.pistoles - 1,
        sous: this.state.sous + 12
      };
      this.props.update(this.props._id, data);
      this.setState({pistoles: this.state.pistoles - 1, sous: this.state.sous + 12});
    }
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <strong>
              {this.state.couronnes > 1 ? "Couronnes d'or" : "Couronne d'or"}
            </strong>
          </td>
          <td>&nbsp;</td>
          <td>
            <strong>
              {this.state.pistoles > 1 ? "Pistoles d'argent" : "Pistole d'argent"}
            </strong>
          </td>
          <td>&nbsp;</td>
          <td><strong>Sous de cuivre</strong></td>
        </tr>
        <tr>
          <td>{this.state.couronnes}</td>
          <td>
            <Badge onClick={this.handlePistolesToCouronnes.bind(this)}><Glyphicon glyph="menu-left" /></Badge>
            <span> 20 </span>
            <Badge onClick={this.handleCouronnesToPistoles.bind(this)}><Glyphicon glyph="menu-right" /></Badge>
          </td>
          <td>{this.state.pistoles}</td>
          <td>
            <Badge onClick={this.handleSousToPistoles.bind(this)}><Glyphicon glyph="menu-left" /></Badge>
            <span> 12 </span>
            <Badge onClick={this.handlePistolesToSous.bind(this)}><Glyphicon glyph="menu-right" /></Badge>
          </td>
          <td>{this.state.sous}</td>
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
