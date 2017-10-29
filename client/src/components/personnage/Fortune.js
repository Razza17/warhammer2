import React, { Component } from 'react';
import { Button, ButtonGroup, Well } from 'react-bootstrap';
import { connect } from 'react-redux';


class Fortune extends Component {
    render() {
        return (
            <Well>
                <span>{this.props.name} : <strong>{this.props.value}
                    {this.props.name !== "Munitions" ? (this.props.value > 1 ? ' points ' : ' point ') : (this.props.value > 1 ? ' munitions ' : ' munition ')}</strong>
                    {this.props.name === "Fortune" && "sur " + this.props.carac[0].pd}
                    {this.props.name === "Blessure" && "sur " + this.props.carac[0].b}
                </span>
                <ButtonGroup style={{marginLeft: "20px"}}>
                    <Button bsStyle="danger">-</Button>
                    <Button bsStyle="success">+</Button>
                </ButtonGroup>
            </Well>
        );
    }
}

function mapStateToProps(state) {
    return {
        carac: state.caracActuel.caracActuel
    }
}

export default connect(mapStateToProps)(Fortune);
