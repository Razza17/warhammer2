import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel } from 'react-bootstrap';
import {Details} from "../../components/personnage/Details";
import { getDetails } from '../../actions/DetailAction';

class DetailsTable extends Component {
    componentWillMount() {
        this.props.getDetails();
    }

    render() {
        return (
            <Panel header="Détails du personnage">
                {
                    this.props.details.map((details, i) => <Details key={i} {...details} />)
                }
            </Panel>
        )
    }
}

function mapStateToProps(state){
    return {
        details: state.details.details
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getDetails}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsTable);
