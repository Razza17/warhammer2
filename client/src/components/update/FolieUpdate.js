import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { deleteFolie, updateFolie } from "../../actions/FolieAction";

class FolieUpdate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nom: this.props.nom
    }
  }

  handleDelete(){
    let _id = this.props._id;
    this.props.deleteFolie(_id);
    this.handleChangeValue();
  }

  handleChangeValue() {
    let folieData = this.props.folie.map((newFolie) => {return {...newFolie}});
    for (let i = 0; i < folieData.length; i++) {
      this.setState({
        nom: folieData[i].nom
      })
    }
  }

  handleUpdate() {
    let _id = this.props._id;
    let folie = {
      _id:_id,
      nom: findDOMNode(this.refs.nomFolie).value
    };
    this.props.updateFolie(_id, folie);
  }


  render() {
    return (
      <tr>
        <td>
          <FormGroup controlId="nomFolie">
            <FormControl
              type='text'
              defaultValue={this.state.nom}
              ref='nomFolie' />
          </FormGroup>
        </td>
        <td>
          <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />&nbsp;&nbsp;<Glyphicon glyph="remove" onClick={this.handleDelete.bind(this)} />
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state){
  return {
    folie: state.folie.folie
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteFolie,
    updateFolie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FolieUpdate);
