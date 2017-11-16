import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';

export class ExperienceUpdate extends Component {

    handleUpdate() {
        let _id = this.props._id;
        let experience = {
            _id:_id,
            actuel: findDOMNode(this.refs.actuelExperience).value,
            total: findDOMNode(this.refs.totalExperience).value
        };
        this.props.updateExperience(_id, experience);
        this.props.getExperience();
    }

    render() {
        return (
            <tr>
                <td>
                    <FormGroup controlId="actuelExperience">
                        <FormControl
                            type='text'
                            defaultValue={this.props.actuel}
                            ref='actuelExperience' />
                    </FormGroup>
                </td>
                <td>
                    <FormGroup controlId="totalExperience">
                        <FormControl
                            type='text'
                            defaultValue={this.props.total}
                            ref='totalExperience' />
                    </FormGroup>
                </td>
                <td>
                    <Glyphicon glyph="pencil" onClick={this.handleUpdate.bind(this)} />
                </td>
            </tr>
        )
    }
}
