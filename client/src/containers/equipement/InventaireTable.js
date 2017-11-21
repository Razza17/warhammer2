import React, { Component } from 'react';
import { Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getInventaire } from "../../actions/InventaireAction";
import { Inventaire } from "../../components/equipement/Inventaire";
import InventaireUpdate from '../../components/update/InventaireUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class InventaireTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            update: false
        }
    }

    showUpdate() {
        this.setState({
            update: !this.state.update
        })
    }

    componentWillMount() {
        this.props.getInventaire();
    }

    render() {
        return (
            <Panel header="Inventaire" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th><span className="show-desktop">Quantité</span><span className="show-mobile">Qté</span></th>
                            <th><span className="show-desktop">Encombrement</span><span className="show-mobile">Enc</span></th>
                            {this.state.update && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.inventaire.map((inventaire, i) => this.state.update ?
                                <InventaireUpdate key={i} {...inventaire} getInventaire={this.props.getInventaire} /> :
                                <Inventaire key={i} {...inventaire}/>)
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        inventaire: state.inventaire.inventaire,
        modified: state.inventaire.payload,
        msg: state.inventaire.msg,
        style: state.inventaire.style
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        getInventaire
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(updateMessage(InventaireTable));
