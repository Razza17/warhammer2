import React, { Component } from 'react';
import { FormControl, FormGroup, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

export class CaracAvanceUpdate extends Component {

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
        this.props.updateCaracAvance(id, newCarac);
        this.props.getCaracAvance();
    }

    render() {
        let tooltip = <Tooltip id={this.props._id}>Click here to update</Tooltip>;
        return (
            <tr>
                <td>Avancé</td>
                <td>
                    <FormGroup controlId="cc">
                        <FormControl
                            type='text'
                            defaultValue={this.props.cc}
                            ref='cc' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="ct">
                        <FormControl
                            type='text'
                            defaultValue={this.props.ct}
                            ref='ct' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="f">
                        <FormControl
                            type='text'
                            defaultValue={this.props.f}
                            ref='f' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="e">
                        <FormControl
                            type='text'
                            defaultValue={this.props.e}
                            ref='e' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="ag">
                        <FormControl
                            type='text'
                            defaultValue={this.props.ag}
                            ref='ag' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="int">
                        <FormControl
                            type='text'
                            defaultValue={this.props.int}
                            ref='int' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="fm">
                        <FormControl
                            type='text'
                            defaultValue={this.props.fm}
                            ref='fm' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="soc">
                        <FormControl
                            type='text'
                            defaultValue={this.props.soc}
                            ref='soc' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="a">
                        <FormControl
                            type='text'
                            defaultValue={this.props.a}
                            ref='a' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="b">
                        <FormControl
                            type='text'
                            defaultValue={this.props.b}
                            ref='b' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="bf">
                        <FormControl
                            type='text'
                            defaultValue={this.props.bf}
                            ref='bf' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="be">
                        <FormControl
                            type='text'
                            defaultValue={this.props.be}
                            ref='be' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="m">
                        <FormControl
                            type='text'
                            defaultValue={this.props.m}
                            ref='m' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="mag">
                        <FormControl
                            type='text'
                            defaultValue={this.props.mag}
                            ref='mag' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="pf">
                        <FormControl
                            type='text'
                            defaultValue={this.props.pf}
                            ref='pf' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="pd">
                        <FormControl
                            type='text'
                            defaultValue={this.props.pd}
                            ref='pd' />
                    </FormGroup>
                </td>
                <td>
                    <OverlayTrigger placement="bottom" overlay={tooltip} delayShow={300} delayHide={150}>
                        <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />
                    </OverlayTrigger>
                </td>
            </tr>
        )
    }
}