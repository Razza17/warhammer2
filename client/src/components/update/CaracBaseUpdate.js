import React, { Component } from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { findDOMNode } from 'react-dom';

import { postCaracBase } from "../../actions/CaracBaseAction";

class CaracBaseUpdate extends Component {
    handleSubmit() {
        const caracBase = [{
            cc: findDOMNode(this.refs.cc).value
        }];
        this.props.postCaracBase(caracBase);
    }

    render() {
        return (
            <Well>
                <Panel>
                    <tr className="text-center">
                        <td className="black">Base</td>
                        <td>
                            <FormGroup controlId="title">
                                <ControlLabel>CC</ControlLabel>
                                <FormControl
                                    type='number'
                                    placeholder={this.props.cc}
                                    ref='cc' />
                            </FormGroup>
                        </td>
                        <td>{this.props.ct}</td>
                        <td>{this.props.f}</td>
                        <td>{this.props.e}</td>
                        <td>{this.props.ag}</td>
                        <td>{this.props.int}</td>
                        <td>{this.props.fm}</td>
                        <td>{this.props.soc}</td>
                        <td>{this.props.a}</td>
                        <td>{this.props.b}</td>
                        <td>{this.props.bf}</td>
                        <td>{this.props.be}</td>
                        <td>{this.props.m}</td>
                        <td>{this.props.mag}</td>
                        <td>{this.props.pf}</td>
                        <td>{this.props.pd}</td>
                        <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Save Carac de base</Button></td>
                    </tr>
                </Panel>
            </Well>
        )
    }
}

function mapStateToProps(state){
    return {
        CaracBase: state.CaracBase.CaracBase
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postCaracBase: postCaracBase}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CaracBaseUpdate);