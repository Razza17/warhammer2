import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteArme } from "../../actions/ArmeAction";

class Armes extends Component {

    handleDelete(){
        let _id = this.props._id;
        this.props.deleteArme(_id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td>{this.props.encombrement}</td>
                <td>{this.props.degats}</td>
                <td>{this.props.portee}</td>
                <td>{this.props.rechargement !== undefined ? this.props.rechargement : 0}</td>
                <td>{this.props.attributs}</td>
                <td><Button bsStyle="danger" onClick={this.handleDelete.bind(this)}>Delete</Button></td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteArme: deleteArme
    }, dispatch)
}

export default connect("", mapDispatchToProps)(Armes);
