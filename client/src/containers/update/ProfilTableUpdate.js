import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'react-bootstrap';

import ProfilUpdate from "../../components/update/ProfilUpdate";
import { getProfile, updateProfile } from '../../actions/ProfilAction';

class ProfilTableUpdate extends Component {

    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <Col xs={8} md={4}>
                {this.props.profile.map((perso, i) => <ProfilUpdate key={i}
                                                                    getProfile={this.props.getProfile}
                                                                    updateProfile={this.props.updateProfile}
                                                                    {...perso} />)
                }
            </Col>
        )
    }
}

function mapStateToProps(state){
    return {
        profile: state.profile.profile
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProfile:getProfile,
        updateProfile:updateProfile
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilTableUpdate);
