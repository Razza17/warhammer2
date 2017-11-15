import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Panel } from 'react-bootstrap';
import { Profil } from "../../components/personnage/Profil";
import { getProfile } from '../../actions/ProfilAction';

class ProfilTable extends Component {
    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <Col xs={12} sm={6} md={4}>
                <Panel header="Personnage" bsStyle="info">
                    {
                        this.props.profile.map((perso, i) => <Profil key={i} {...perso} />)
                    }
                </Panel>
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
        getProfile:getProfile
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilTable);
