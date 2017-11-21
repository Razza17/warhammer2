import React, { Component } from 'react';
import { Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFolie } from "../../actions/FolieAction";
import { Folie } from "../../components/equipement/Folie";
import FolieUpdate from '../../components/update/FolieUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class FolieTable extends Component {

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
        this.props.getFolie();
    }

    render() {
        return (
            <Panel header="Folies" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            {this.state.update && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.folie.map((folie, i) => this.state.update ?
                                <FolieUpdate key={i} {...folie}  getFolie={this.props.getFolie} /> :
                                <Folie key={i} {...folie}/>)
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        folie: state.folie.folie,
        modified: state.folie.payload,
        msg: state.folie.msg,
        style: state.folie.style
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        getFolie
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(updateMessage(FolieTable));
