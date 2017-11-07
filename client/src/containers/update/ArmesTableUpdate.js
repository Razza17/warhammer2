import React, { Component } from 'react';
import { Col, Table, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postArme, getArme } from "../../actions/ArmeAction";
import ArmesUpdate from '../../components/update/ArmesUpdate';

class ArmesTableUpdate extends Component {
    componentDidMount() {
        this.props.getArme();
    }

    handleSubmit() {
        const arme = [{
            nom: findDOMNode(this.refs.nomArme).value,
            encombrement: findDOMNode(this.refs.encArme).value,
            degats: findDOMNode(this.refs.degatsArme).value,
            portee: findDOMNode(this.refs.porteeArme).value,
            rechargement: findDOMNode(this.refs.rechargementArme).value,
            attributs: findDOMNode(this.refs.attributsArme).value
        }];
        this.props.postArme(arme);
    }

    render() {
        return (
            <Col xs={12} md={6}>
                <Table condensed bordered hover striped>
                    <thead>
                        <tr><th colSpan="7">Armes</th></tr>
                        <tr>
                            <th>Nom</th>
                            <th>Enc</th>
                            <th><span className="show-desktop">Dégâts</span><span className="show-mobile">Dég</span></th>
                            <th>Portée</th>
                            <th><span className="show-desktop">Rechargement</span><span className="show-mobile">Recharg</span></th>
                            <th>Attributs</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.arme.map((armes, i) => <ArmesUpdate key={i} {...armes} />) }
                        <tr>
                            <td>
                                <FormGroup controlId="nomArme">
                                    <FormControl
                                        type='text'
                                        placeholder='Nom'
                                        ref='nomArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="encArme">
                                    <FormControl
                                        type='number'
                                        placeholder='Encombrement'
                                        ref='encArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="degatsArme">
                                    <FormControl
                                        type='number'
                                        placeholder='Dégâts'
                                        ref='degatsArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="porteeArme">
                                    <FormControl
                                        type='text'
                                        placeholder='Potée'
                                        ref='porteeArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="rechargementArme">
                                    <FormControl
                                        type='number'
                                        placeholder='Rechargement'
                                        ref='rechargementArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="attributsArme">
                                    <FormControl
                                        type='text'
                                        placeholder='Attributs'
                                        ref='attributsArme' />
                                </FormGroup>
                            </td>
                            <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Add</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        arme: state.arme.arme
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArme:getArme,
        postArme:postArme
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArmesTableUpdate);
