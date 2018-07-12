import React, {Component} from 'react';
import {FormGroup, FormControl, Checkbox, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';

import {postCompBase} from "../../actions/CompBaseAction";

class CreaCompBase extends Component {

  constructor(props) {
    super(props);

    let saveLine = document.getElementsByClassName('save-comp');
    // let dataLine = saveLine.getAttributeNode("data-activeLine");

    console.log(saveLine);

    this.state = {
      activeLine: "0",
      acquisCheck: false,
      dixCheck: false,
      vingtCheck: false,
      creaBonusCompBase: 0
    }
  }

  changeAcquis() {
    this.setState({
      acquisCheck: !this.state.acquisCheck
    })
  }

  changeDix() {
    this.setState({
      dixCheck: !this.state.dixCheck
    })
  }

  changeVingt() {
    this.setState({
      vingtCheck: !this.state.vingtCheck
    })
  }

  postTableComp() {
    let compBase = {
      nom: this.props.nom,
      carac: this.props.carac,
      acquis: this.state.acquisCheck,
      dix: this.state.dixCheck,
      vingt: this.state.vingtCheck,
      bonus: findDOMNode(this.refs.bonusCompBase).value,
      user: this.props.user,
      perso: this.props.character
    };
    console.log(compBase);
    // this.props.postCompBase(compBase);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    value !== "" ? this.setState({[name]: "success"}) : this.setState({[name]: "error"});
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.nom}
        </td>
        <td>
          {this.props.carac}
        </td>
        <td>
          <Checkbox checked={this.state.acquisCheck} onChange={this.changeAcquis.bind(this)}/>
        </td>
        <td>
          <Checkbox checked={this.state.dixCheck} onChange={this.changeDix.bind(this)}/>
        </td>
        <td>
          <Checkbox checked={this.state.vingtCheck} onChange={this.changeVingt.bind(this)}/>
        </td>
        <td>
          <FormGroup controlId="bonusCompBase">
            <FormControl
              type='text'
              name="bonusCompBase"
              ref='bonusCompBase'
              defaultValue = {this.state.creaBonusCompBase}
              onChange={this.onChange.bind(this)}
              />
          </FormGroup>
        </td>
        <td className="">
          <Button className="save-comp" data-activeLine={this.state.activeLine} onClick={this.postTableComp.bind(this)}>Enregistre {this.props.nom}</Button>
        </td>
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postCompBase
  }, dispatch)
}

export default connect("", mapDispatchToProps)(CreaCompBase);
