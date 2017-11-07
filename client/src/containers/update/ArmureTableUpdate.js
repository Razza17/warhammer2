import React, { Component } from 'react';
import { Col, Panel, Table, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getArmure, postArmure } from "../../actions/ArmureAction";
import ArmureUpdate from '../../components/update/ArmureUpdate';

class ArmureTableUpdate extends Component {
    componentDidMount() {
        this.props.getArmure();
    }

    handleSubmit() {
        const armure = [{
            nom: findDOMNode(this.refs.nomArmure).value,
            encombrement: findDOMNode(this.refs.encArmure).value,
            couverture: findDOMNode(this.refs.couvArmure).value,
            points: findDOMNode(this.refs.pointsArmure).value
        }];
        console.log(armure);
        this.props.postArmure(armure);
    }

    render() {
        return (
            <Col xs={12} md={6}>
                <Panel collapsible header="Armures">
                    <Table condensed bordered hover striped fill>
                        <thead>
                            <tr><th colSpan="5">Armure</th></tr>
                            <tr>
                                <th>Nom</th>
                                <th>Enc</th>
                                <th>Couverture</th>
                                <th>Points</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.armure.map((armure, i) => <ArmureUpdate key={i} {...armure} />) }
                            <tr>
                                <td>
                                    <FormGroup controlId="nomArmure">
                                        <FormControl
                                            type='text'
                                            placeholder='Nom'
                                            ref='nomArmure' />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="encArmure">
                                        <FormControl
                                            type='number'
                                            placeholder='Encombrement'
                                            ref='encArmure' />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="formControlsSelect">
                                        <FormControl componentClass='select' placeholder='Couverture' ref='couvArmure'>
                                            <option value='select'>Couverture</option>
                                            <option value='Tête'>Tête</option>
                                            <option value='Bras'>Bras</option>
                                            <option value='Corps'>Corps</option>
                                            <option value='Corps + Bras'>Corps + Bras</option>
                                            <option value='Jambes'>Jambes</option>
                                        </FormControl>
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="pointsArmure">
                                        <FormControl
                                            type='number'
                                            placeholder='Points'
                                            ref='pointsArmure' />
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
        armure: state.armure.armure
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArmure:getArmure,
        postArmure:postArmure
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmureTableUpdate);
