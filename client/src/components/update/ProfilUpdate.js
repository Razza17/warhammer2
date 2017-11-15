import React, { Component } from 'react';
import { Panel, FormGroup, FormControl, InputGroup, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';

class ProfilUpdate extends Component {

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
        let newData = {
            carriereA: findDOMNode(this.refs.carriereA).value,
            Acarriere: findDOMNode(this.refs.Acarriere).value
        };

        this.props.updateProfile(id, newData);
        this.props.getProfile();
    }

    componentWillReceiveProps(nextProps) {
        let nextStatus = nextProps.status;
        if(nextStatus === 200) {
            this.setState({
                status: !this.state.status,
                msg: "Your Profile has been successfully updated",
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
            <Panel collapsible header="Personnage">
                <ul>
                    <li>
                        <FormGroup controlId="carriereA">
                            <InputGroup>
                                <InputGroup.Addon>Carrière Actuelle</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.carriereA}
                                    ref='carriereA' />
                            </InputGroup>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup controlId="Acarriere">
                            <InputGroup>
                                <InputGroup.Addon>Ancienne Carrière</InputGroup.Addon>
                                <FormControl
                                    type='text'
                                    defaultValue={this.props.Acarriere}
                                    ref='Acarriere' />
                            </InputGroup>
                        </FormGroup>
                    </li>
                    <li>
                        <Button bsStyle="primary" onClick={this.handleUpdate.bind(this)}>Update</Button>
                    </li>
                </ul>
                <Alert className={this.state.status ? "showMsg" : "hideMsg"} bsStyle={this.state.style}>
                    {this.state.msg}
                </Alert>
            </Panel>
        )
    }
}

function mapStateToProps(state){
    return {
        status: state.profile.status
    }
}

export default connect(mapStateToProps)(ProfilUpdate);
