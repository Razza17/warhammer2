import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";

class Home extends Component {
    render() {

        const Name = this.props.profile.length ? "Welcome Warrior " + this.props.profile[0].nom : "Welcome Warrior";

        return (
            <Col xs={12}>
                <h1 className="align-center">{Name}</h1>
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        profile: state.profile.profile
    }
}

export default connect(mapStateToProps)(Home);