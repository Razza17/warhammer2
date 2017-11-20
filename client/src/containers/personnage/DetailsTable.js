import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Panel } from 'react-bootstrap';
import {Details} from "../../components/personnage/Details";
import { getDetails } from '../../actions/DetailAction';

class DetailsTable extends Component {
    componentWillMount() {
        this.props.getDetails();
    }

    render() {
        return (
            <Col xs={12} sm={6} md={8} lg={4}>
                <Panel header="Détails du personnage">
                    {
                        this.props.details.map((details, i) => <Details key={i} {...details} />)
                    }
                </Panel>
            </Col>
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
