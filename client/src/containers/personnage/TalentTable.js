import React, { Component } from 'react';
import { Table, Panel, Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { Talent } from "../../components/personnage/Talent";
import { TalentUpdate } from '../../components/update/TalentUpdate';
import { getTalent, updateTalent, postTalent } from "../../actions/TalentAction";
import { updateMessage } from "../../hocs/updateMessage";

class TalentTable extends Component {

  componentWillMount() {
    this.props.getTalent();
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
    let newTalent = {
      nom: findDOMNode(this.refs.nomPostTalent).value,
      desc: findDOMNode(this.refs.descPostTalent).value,
      competence: findDOMNode(this.refs.compPostTalent).value,
      bonus: findDOMNode(this.refs.bonusPostTalent).value,
    };
    this.props.postTalent(newTalent);
    this.props.getTalent();
    this.resetForm();
  }

  resetForm(){
    findDOMNode(this.refs.nomPostTalent).value = "";
    findDOMNode(this.refs.descPostTalent).value = "";
    findDOMNode(this.refs.compPostTalent).value = "";
    findDOMNode(this.refs.bonusPostTalent).value = "";
  }

  render () {
    return (
      <Panel header="Talents" className="noPadding">
        <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
        <Table condensed hover striped fill>
          <thead>
            <tr>
              <th>Nom</th>
              <th><span className="show-desktop">Description</span><span className="show-mobile">Desc</span></th>
              <th><span className="show-desktop">Compétences</span><span className="show-mobile">Comp</span></th>
              <th>Bonus</th>
              {this.state.update && <th>Update</th>}
            </tr>
          </thead>
          <tbody>
            {
              this.props.talent.map((talents, i) =>
              this.state.update ?
              <TalentUpdate key={i} {...talents} getTalent={this.props.getTalent} updateTalent={this.props.updateTalent} /> :
                <Talent key={i} {...talents} />
              )
            }
            {this.state.update &&
              <tr>
                <td>
                  <FormGroup controlId="nomPostTalent">
                    <FormControl
                      type='text'
                      placeholder='Nom'
                      ref='nomPostTalent' />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup controlId="descPostTalent">
                    <FormControl
                      type='text'
                      placeholder='Description'
                      ref='descPostTalent' />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup controlId="compPostTalent">
                    <FormControl
                      type='text'
                      placeholder='Compétence'
                      ref='compPostTalent' />
                  </FormGroup>
                </td>
                <td>
                  <FormGroup controlId="bonusPostTalent">
                    <FormControl
                      type='text'
                      placeholder='Bonus'
                      ref='bonusPostTalent' />
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
    talent: state.talent.talent,
    modified: state.talent.payload,
    msg: state.talent.msg,
    style: state.talent.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({
    getTalent,
    updateTalent,
    postTalent
  }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(updateMessage(TalentTable));
