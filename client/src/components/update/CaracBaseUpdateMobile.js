import React, { Component } from 'react';
import { Table, FormControl, FormGroup, ControlLabel, Glyphicon, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';

class CaracBaseUpdateMobile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false,
            msg: "",
            style: "success"
        }
    }

    handleUpdate() {
        let id = this.props._id;
        const newCarac = {
            cc: findDOMNode(this.refs.cc).value,
            ct: findDOMNode(this.refs.ct).value,
            f: findDOMNode(this.refs.f).value,
            e: findDOMNode(this.refs.e).value,
            ag: findDOMNode(this.refs.ag).value,
            int: findDOMNode(this.refs.int).value,
            fm: findDOMNode(this.refs.fm).value,
            soc: findDOMNode(this.refs.soc).value,
            a: findDOMNode(this.refs.a).value,
            b: findDOMNode(this.refs.b).value,
            bf: findDOMNode(this.refs.bf).value,
            be: findDOMNode(this.refs.be).value,
            m: findDOMNode(this.refs.m).value,
            mag: findDOMNode(this.refs.mag).value,
            pf: findDOMNode(this.refs.pf).value,
            pd: findDOMNode(this.refs.pd).value
        };
        this.props.updateCaracBase(id, newCarac);
    }

    componentWillReceiveProps(nextProps) {
        let nextStatus = nextProps.status;
        if(nextStatus === 200) {
            this.setState({
                status: !this.state.status,
                msg: "Your based carac has been successfully updated",
                style: "success"
            });
        } else {
            this.setState({
                status: !this.state.status,
                msg: "Oups something went wrong ! Maybe try again",
                style: "danger"
            });

        }

        setTimeout(() => {
            this.setState({
                status: false,
                msg: "",
                style: "success"
            })
        }, 2000)
    }

    render() {
        let tooltip = <Tooltip id={this.props._id}>Click here to update</Tooltip>;
        return (
            <Table condensed bordered hover striped fill>
                <tbody>
                    <tr>
                        <td rowSpan="2" className="black">Base</td>
                        <td>
                            <FormGroup controlId="cc">
                                <ControlLabel>CC</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.cc}
                                    ref='cc' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="ct">
                                <ControlLabel>CT</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.ct}
                                    ref='ct' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="f">
                                <ControlLabel>F</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.f}
                                    ref='f' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="e">
                                <ControlLabel>E</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.e}
                                    ref='e' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="ag">
                                <ControlLabel>AG</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.ag}
                                    ref='ag' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="int">
                                <ControlLabel>INT</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.int}
                                    ref='int' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="fm">
                                <ControlLabel>FM</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.fm}
                                    ref='fm' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="soc">
                                <ControlLabel>SOC</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.soc}
                                    ref='soc' />
                            </FormGroup>
                        </td>
                        <td rowSpan="2">
                            <OverlayTrigger placement="bottom" overlay={tooltip} delayShow={300} delayHide={150}>
                                <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />
                            </OverlayTrigger>
                            <Alert className={this.state.status ? "showMsg" : "hideMsg"} bsStyle={this.state.style}>
                                {this.state.msg}
                            </Alert>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FormGroup controlId="a">
                                <ControlLabel>A</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.a}
                                    ref='a' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="b">
                                <ControlLabel>B</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.b}
                                    ref='b' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="bf">
                                <ControlLabel>BF</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.bf}
                                    ref='bf' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="be">
                                <ControlLabel>BE</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.be}
                                    ref='be' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="m">
                                <ControlLabel>M</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.m}
                                    ref='m' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="mag">
                                <ControlLabel>MAG</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.mag}
                                    ref='mag' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="pf">
                                <ControlLabel>PF</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.pf}
                                    ref='pf' />
                            </FormGroup>
                        </td>
                        <td>
                            <FormGroup controlId="pd">
                                <ControlLabel>PD</ControlLabel>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.pd}
                                    ref='pd' />
                            </FormGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}



function mapStateToProps(state){
    return {
        status: state.caracBase.status
    }
}

export default connect(mapStateToProps)(CaracBaseUpdateMobile);