import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFolie } from "../../actions/FolieAction";
import { Folie } from "../../components/equipement/Folie";

class FolieTable extends Component {
    componentWillMount() {
        this.props.getFolie();
    }

    render() {
        return (
            <Panel header="Folies" bsStyle="info">
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.folie.map((folie, i) => <Folie key={i} {...folie}/>) }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        folie: state.folie.folie
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        getFolie
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(FolieTable);
