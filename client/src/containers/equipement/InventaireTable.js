import React, { Component } from 'react';
import { Table, Panel, Button, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getInventaire, postInventaire } from "../../actions/InventaireAction";
import { Inventaire } from "../../components/equipement/Inventaire";
import InventaireUpdate from '../../components/update/InventaireUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class InventaireTable extends Component {

  componentWillMount() {
    this.props.getInventaire();
  }

  constructor(props) {
    super(props);

    this.state = {
      update: false
    }
  }

  showUpdate() {
    this.setState({
      update: !this.state.update
    })
  }

  handleSubmit() {
    const inventaire = {
      nom: findDOMNode(this.refs.nomPostInventaire).value,
      quantite: findDOMNode(this.refs.quantitePostInventaire).value,
      encombrement: findDOMNode(this.refs.encPostInventaire).value
    };
    this.props.postInventaire(inventaire);
    this.props.getInventaire();
    this.resetForm();
  }

  resetForm() {
    findDOMNode(this.refs.nomPostInventaire).value = "";
    findDOMNode(this.refs.quantitePostInventaire).value = "";
    findDOMNode(this.refs.encPostInventaire).value = "";
  }

  render() {
    return (
      <Panel header="Inventaire" className="noPadding">
        <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
        <Table condensed bordered hover striped fill>
          <thead>
            <tr>
              <th>Nom</th>
              <th><span className="show-desktop">Quantité</span><span className="show-mobile">Qté</span></th>
              <th><span className="show-desktop">Encombrement</span><span className="show-mobile">Enc</span></th>
              {this.state.update && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {
              this.props.inventaire.map((inventaire, i) => this.state.update ?
              <InventaireUpdate key={inventaire._id} {...inventaire} getInventaire={this.props.getInventaire} /> :
                <Inventaire key={i} {...inventaire}/>)
                }
                {this.state.update &&
                  <tr>
                    <td>
                      <FormGroup controlId="nomPostInventaire">
                        <FormControl
                          type='text'
                          placeholder='Nom'
                          ref='nomPostInventaire' />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="quantitePostInventaire">
                        <FormControl
                          type='number'
                          placeholder='Quantité'
                          ref='quantitePostInventaire' />
                      </FormGroup>
                    </td>
                    <td>
                      <FormGroup controlId="encPostInventaire">
                        <FormControl
                          type='number'
                          placeholder='Encombrement'
                          ref='encPostInventaire' />
                      </FormGroup>
                    </td>
                    <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Add</Button></td>
                  </tr>
                }
              </tbody>
            </Table>
          </Panel>
        )
      }
    }

    function mapStateToProps(state) {
      return {
        inventaire: state.inventaire.inventaire,
        modified: state.inventaire.payload,
        msg: state.inventaire.msg,
        style: state.inventaire.style
      }
    }

    function mapDispatchtoProps(dispatch) {
      return bindActionCreators({
        getInventaire,
        postInventaire
      }, dispatch)
    }

    export default connect(mapStateToProps, mapDispatchtoProps)(updateMessage(InventaireTable));
