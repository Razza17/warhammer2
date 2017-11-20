import React, { Component } from 'react';
import { Col, Table, Panel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getTalent, postTalent, updateTalent } from "../../actions/TalentAction";
import { TalentUpdate } from "../../components/update/TalentUpdate";
import { updateMessage } from "../../hocs/updateMessage";

class TalentTableUpdate extends Component {
    componentWillMount() {
        this.props.getTalent();
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
            <Col xs={12} md={6}>
                <Panel collapsible header="Talents">
                    <Table condensed hover striped className="border" fill>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Compétences</th>
                                <th>Bonus</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.talent.map((talents, i) =>
                                <TalentUpdate key={i} {...talents} getTalent={this.props.getTalent} updateTalent={this.props.updateTalent} />
                            )
                        }
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
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        talent: state.talent.talent,
        msg: state.talent.msg,
        style: state.talent.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({
        getTalent,
        postTalent,
        updateTalent
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (updateMessage(TalentTableUpdate));