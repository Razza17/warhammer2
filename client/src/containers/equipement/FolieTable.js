import React, { Component } from 'react';
import { Table, Panel, Button, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getFolie, postFolie } from "../../actions/FolieAction";
import { Folie } from "../../components/equipement/Folie";
import FolieUpdate from '../../components/update/FolieUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class FolieTable extends Component {

  componentWillMount() {
    this.props.getFolie();
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
    const folie = {
      nom: findDOMNode(this.refs.nomPostFolie).value
    };
    this.props.postFolie(folie);
    this.props.getFolie();
    this.resetForm();
  }

  resetForm(){
    findDOMNode(this.refs.nomPostFolie).value = "";
  }

  render() {
    return (
      <Panel header="Folies" className="noPadding">
        <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
        <Table condensed bordered hover striped fill>
          <thead>
            <tr>
              <th>Nom</th>
              {this.state.update && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {
              this.props.folie.map((folie, i) => this.state.update ?
              <FolieUpdate key={folie._id} {...folie}  getFolie={this.props.getFolie} /> :
                <Folie key={i} {...folie}/>)
                }
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
        folie: state.folie.folie,
        modified: state.folie.payload,
        msg: state.folie.msg,
        style: state.folie.style
      }
    }

    function mapDispatchtoProps(dispatch) {
      return bindActionCreators({
        getFolie,
        postFolie
      }, dispatch)
    }

    export default connect(mapStateToProps, mapDispatchtoProps)(updateMessage(FolieTable));
