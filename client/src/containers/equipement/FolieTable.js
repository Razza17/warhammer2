import React, { Component } from 'react';
import { Table, Panel, Button, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getFolie, postFolie } from "../../actions/FolieAction";
import { Folie } from "../../components/equipement/Folie";
import FolieUpdate from '../../components/update/FolieUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class FolieTable extends Component {

  constructor(props) {
    super(props);
    let userID = localStorage.getItem('userID');
    let userPersoID = localStorage.getItem('userPersoID');

    this.props.getFolie(userID, userPersoID);

    this.state = {
      userID: userID,
      userPersoID: userPersoID,
      update: false
    }
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  handleSubmit() {
    const folie = {
      nom: findDOMNode(this.refs.nomPostFolie).value,
      user: this.state.userID,
      perso: this.state.userPersoID
    };
    this.props.postFolie(folie);
    this.resetForm();
  }

  resetForm(){
    findDOMNode(this.refs.nomPostFolie).value = "";
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h2">Folies</Panel.Title>
          <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>{this.state.update ? <Glyphicon glyph="minus" /> : <Glyphicon glyph="plus" />}</Button>
        </Panel.Heading>
        <Panel.Body>
          <Table condensed bordered hover striped >
            <thead>
              <tr>
                <th>Nom</th>
                {this.state.update && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              { this.props.folie.map((folie, i) => this.state.update ? <FolieUpdate key={folie._id} {...folie} /> : <Folie key={i} {...folie}/>) }
              {this.state.update &&
                <tr>
                  <td>
                    <FormGroup controlId="nomPostFolie">
                      <FormControl
                        type='text'
                        placeholder='Nom'
                        ref='nomPostFolie' />
                    </FormGroup>
                  </td>
                  <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Ajouter</Button></td>
                </tr>
              }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    )
  }
}

const mapStateToProps = state => {
  return {
    folie: state.folie.folie,
    modified: state.folie.payload,
    msg: state.folie.msg,
    style: state.folie.style
  }
}

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({
    getFolie, postFolie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(updateMessage(FolieTable));
