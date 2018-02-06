import React, { Component } from 'react';
import { Table, Panel, FormGroup, FormControl, Button, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getCompAvance, postCompAvance } from "../../actions/CompAvanceAction";
import CompetenceAvanceUpdate from "../../components/update/CompetenceAvanceUpdate";
import { updateMessage } from "../../hocs/updateMessage";

class CompetenceTableAvanceUpdate extends Component {
    componentWillMount() {
        this.props.getCompAvance();
    }

    constructor(props) {
        super(props);

        this.state = {
            acquisCheck: false,
            dixCheck: false,
            vingtCheck: false
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

    handlePost() {
        let postCompAvance = [{
            nom: findDOMNode(this.refs.nomPostCompAvance).value,
            carac: findDOMNode(this.refs.caracPostCompAvance).value,
            acquis: this.state.acquisCheck,
            dix: this.state.dixCheck,
            vingt: this.state.vingtCheck,
            bonus: findDOMNode(this.refs.bonusPostCompAvance).value
        }];
        this.props.postCompAvance(postCompAvance);
        this.resetForm();
    }

    resetForm() {
        findDOMNode(this.refs.nomPostCompAvance).value = "";
        findDOMNode(this.refs.caracPostCompAvance).value = "";
        findDOMNode(this.refs.bonusPostCompAvance).value = "";
        this.setState({
            acquisCheck: false,
            dixCheck: false,
            vingtCheck: false
        })
    }

    render() {
        return (
            <Panel collapsible header="Compétences avancées">
                <Table condensed hover striped bordered fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Carac.</th>
                            <th>Acquis</th>
                            <th>+10%</th>
                            <th>+20%</th>
                            <th>Bonus</th>
                            <th>Total</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.compAvance.map((competenceA, i) =>
                                <CompetenceAvanceUpdate key={i} {...competenceA} getCompAvance={this.props.getCompAvance}/>
                            )
                        }
                        <tr>
                            <td>
                                <FormGroup controlId="nomPostCompAvance">
                                    <FormControl
                                        type='text'
                                        placeholder='Nom'
                                        ref='nomPostCompAvance' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="formControlsSelect">
                                    <FormControl componentClass='select' placeholder='Caractéristiques' ref='caracPostCompAvance'>
                                        <option value='select'>Caractéristiques</option>
                                        <option value='(F)'>Force (F)</option>
                                        <option value='(Soc)'>Sociabilité (Soc)</option>
                                        <option value='(Ag)'>Agilité (Ag)</option>
                                        <option value='(Int)'>Intélligence (Int)</option>
                                        <option value='(E)'>Endurance (E)</option>
                                    </FormControl>
                                </FormGroup>
                            </td>
                            <td>
                                <Checkbox onClick={this.changeAcquis.bind(this)} />
                            </td>
                            <td>
                                <Checkbox onClick={this.changeDix.bind(this)} />
                            </td>
                            <td>
                                <Checkbox onClick={this.changeVingt.bind(this)} />
                            </td>
                            <td>
                                <FormGroup controlId="bonusPostCompAvance">
                                    <FormControl
                                        type='text'
                                        placeholder='Bonus'
                                        ref='bonusPostCompAvance' />
                                </FormGroup>
                            </td>
                            <td colSpan="2">
                                <Button onClick={this.handlePost.bind(this)}>Add</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        )
    }
}


function mapStateToProps(state) {
    return {
        compAvance: state.compAvance.compAvance,
        msg: state.compAvance.msg,
        style: state.compAvance.style
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCompAvance,
        postCompAvance
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CompetenceTableAvanceUpdate));
