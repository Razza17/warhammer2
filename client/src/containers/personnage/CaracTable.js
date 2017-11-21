import React, { Component } from 'react';
import { Col, Table, Panel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Carac } from "../../components/personnage/Carac";
import { CaracUpdate } from "../../components/update/CaracUpdate";
import { getCarac, updateCarac } from "../../actions/CaracAction";
import { updateMessage } from "../../hocs/updateMessage";


class CaracTable extends Component {

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
        this.props.getCarac();
    }

    render() {
        return (
            <Panel header="Profil du personnage" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed bordered hover striped className="carac-table-desktop" fill>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th colSpan="8">Profil Principal</th>
                            <th colSpan="8">Profil Secondaire</th>
                        </tr>
                        <tr className="text-center profilHeader">
                            <th>&nbsp;</th>
                            <th>CC</th>
                            <th>CT</th>
                            <th>F</th>
                            <th>E</th>
                            <th>Ag</th>
                            <th>Int</th>
                            <th>FM</th>
                            <th>Soc</th>
                            <th>A</th>
                            <th>B</th>
                            <th>BF</th>
                            <th>BE</th>
                            <th>M</th>
                            <th>Mag</th>
                            <th>PF</th>
                            <th>PD</th>
                            {this.state.update && <th>Update</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.carac.map((carac, i) =>
                                this.state.update ? <CaracUpdate key={i} {...carac} getCarac={this.props.getCarac} updateCarac={this.props.updateCarac}/> : <Carac key={i} {...carac} />)
                        }
                    </tbody>
                </Table>
                <Table condensed bordered hover striped className="carac-table-mobile" fill>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th colSpan="8">Profil Principal</th>
                        </tr>
                        <tr className="text-center profilHeader">
                            <th>&nbsp;</th>
                            <th>CC</th>
                            <th>CT</th>
                            <th>F</th>
                            <th>E</th>
                            <th>Ag</th>
                            <th>Int</th>
                            <th>FM</th>
                            <th>Soc</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th colSpan="8">Profil Secondaire</th>
                        </tr>
                        <tr className="text-center profilHeader">
                            <th>&nbsp;</th>
                            <th>A</th>
                            <th>B</th>
                            <th>BF</th>
                            <th>BE</th>
                            <th>M</th>
                            <th>Mag</th>
                            <th>PF</th>
                            <th>PD</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state){
    return {
        carac: state.carac.carac,
        modified: state.carac.payload,
        msg: state.carac.msg,
        style: state.carac.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCarac,
        updateCarac
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CaracTable));