import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteArmure } from "../../actions/ArmureAction";

class ArmureUpdate extends Component {

    handleDelete(){
        let _id = this.props._id;
        this.props.deleteArmure(_id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.nom}</td>
                <td>{this.props.encombrement}</td>
                <td>{this.props.couverture}</td>
                <td>{this.props.points}</td>
                <td>
                    <Glyphicon glyph="pencil" onClick={this.handleDelete.bind(this)} />&nbsp;&nbsp;<Glyphicon glyph="remove" onClick={this.handleDelete.bind(this)} />
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteArmure: deleteArmure
    }, dispatch)
}

export default connect("", mapDispatchToProps)(ArmureUpdate);
