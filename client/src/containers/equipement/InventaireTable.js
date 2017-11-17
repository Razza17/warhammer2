import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getInventaire } from "../../actions/InventaireAction";
import { Inventaire } from "../../components/equipement/Inventaire";

class InventaireTable extends Component {
    componentWillMount() {
        this.props.getInventaire();
    }

    render() {
        return (
            <Panel header="Inventaire" bsStyle="info">
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>Encombrement</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.inventaire.map((inventaire, i) => <Inventaire key={i} {...inventaire}/>) }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        inventaire: state.inventaire.inventaire
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        getInventaire
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(InventaireTable);
