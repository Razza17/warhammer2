import React, { Component } from 'react';
import { Col, Panel, Table, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postFolie, getFolie } from "../../actions/FolieAction";
import FolieUpdate from '../../components/update/FolieUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class FolieTableUpdate extends Component {
    componentWillMount() {
        this.props.getFolie();
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
            <Panel collapsible header="Folies">
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.folie.map((folie) => <FolieUpdate key={folie._id} {...folie} getFolie={this.props.getFolie} />) }
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
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        folie: state.folie.folie,
        msg: state.folie.msg,
        style: state.folie.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFolie,
        postFolie
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(FolieTableUpdate));
