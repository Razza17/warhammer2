import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

class Competence extends Component {
  render() {
    const force = this.props.caracActuel.length && this.props.caracActuel[2].f;
    const sociabilite = this.props.caracActuel.length && this.props.caracActuel[2].soc;
    const agilite = this.props.caracActuel.length && this.props.caracActuel[2].ag;
    const intelligence = this.props.caracActuel.length && this.props.caracActuel[2].int;
    const endurance = this.props.caracActuel.length && this.props.caracActuel[2].e;
    return (
      <tr>
        <td>{this.props.nom}</td>
        <td>{this.props.carac}</td>
        <td>{this.props.acquis && <Glyphicon glyph="ok" />}</td>
        <td>{this.props.dix && <Glyphicon glyph="ok" />}</td>
        <td>{this.props.vingt && <Glyphicon glyph="ok" />}</td>
        <td>{this.props.bonus}</td>
        <td>
          {this.props.carac === '(F)' && (this.props.acquis ? force : Math.round(force / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
          {this.props.carac === '(Soc)' && (this.props.acquis ? sociabilite : Math.round(sociabilite / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
          {this.props.carac === '(Ag)' && (this.props.acquis ? agilite : Math.round(agilite / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
          {this.props.carac === '(Int)' && (this.props.acquis ? intelligence : Math.round(intelligence / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
          {this.props.carac === '(E)' && (this.props.acquis ? endurance : Math.round(endurance / 2)) + (this.props.dix ? 10 : 0) + (this.props.vingt ? 20 : 0) + this.props.bonus}
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    caracActuel: state.carac.carac
  }
}

export default connect(mapStateToProps)(Competence);
