import React, { Component } from 'react';
import { Glyphicon, FormGroup, FormControl, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { updateExperience } from "../../actions/ExperienceAction";

class ExperienceUpdate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: false,
            msg: "",
            style: "success"
        }
    }

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

    componentWillReceiveProps(nextProps) {
        let nextStatus = nextProps.status;
        if(nextStatus === 200) {
            this.setState({
                status: !this.state.status,
                msg: "Your Experience data has been successfully updated",
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
                    <Alert className={this.state.status ? "showMsg" : "hideMsg"} bsStyle={this.state.style}>
                        {this.state.msg}
                    </Alert>
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        status: state.experience.status
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateExperience: updateExperience
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceUpdate);
