import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';
import { Profil } from "../../components/personnage/Profil";
import { getProfile } from '../../actions/ProfilAction';

class ProfilTable extends Component {
    componentWillMount() {
        this.props.getProfile();
    }

    render() {
        return (
            <Panel header="Personnage">
                { this.props.profile.map((perso, i) => <Profil key={i} {...perso} />) }
            </Panel>
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
        getProfile
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilTable);
