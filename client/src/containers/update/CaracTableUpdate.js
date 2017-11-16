import React, { Component } from 'react';
import { Panel, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracBase, updateCaracBase } from "../../actions/CaracBaseAction";
import { getCaracAvance, updateCaracAvance } from "../../actions/CaracAvanceAction";
import { getCaracActuel, updateCaracActuel } from "../../actions/CaracActuelAction";
import { CaracBaseUpdate } from "../../components/update/CaracBaseUpdate";
import { CaracAvanceUpdate } from "../../components/update/CaracAvanceUpdate";
import { CaracActuelUpdate } from "../../components/update/CaracActuelUpdate";
import { updateMessage } from "../../hocs/updateMessage";


class CaracTableUpdate extends Component {
    componentWillMount() {
        this.props.getCaracBase();
        this.props.getCaracAvance();
        this.props.getCaracActuel();
    }

    render() {
        return (
            <Panel collapsible header="Profil du personnage">
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th colSpan="9">Profil Principal</th>
                            <th colSpan="9">Profil Secondaire</th>
                        </tr>
                        <tr className="text-center profilHeader">
                            <th>Type</th>
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
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.caracBase.map((caracBase, i) => <CaracBaseUpdate key={i}
                                                                                     getCaracBase={this.props.getCaracBase}
                                                                                     updateCaracBase={this.props.updateCaracBase}
                                                                                     {...caracBase}/>)
                        }
                        {this.props.caracAvance.map((caracAvance, i) => <CaracAvanceUpdate key={i}
                                                                                           getCaracAvance={this.props.getCaracAvance}
                                                                                           updateCaracAvance={this.props.updateCaracAvance}
                                                                                           {...caracAvance}/>)
                        }
                        {this.props.caracActuel.map((caracActuel, i) => <CaracActuelUpdate key={i}
                                                                                           getCaracActuel={this.props.getCaracActuel}
                                                                                           updateCaracActuel={this.props.updateCaracActuel}
                                                                                           {...caracActuel}/>)
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state){
    return {
        caracBase: state.caracBase.caracBase,
        caracAvance: state.caracAvance.caracAvance,
        caracActuel: state.caracActuel.caracActuel,
        status: state.caracBase.status
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCaracBase:getCaracBase,
        updateCaracBase:updateCaracBase,
        getCaracAvance:getCaracAvance,
        updateCaracAvance:updateCaracAvance,
        getCaracActuel:getCaracActuel,
        updateCaracActuel:updateCaracActuel
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(CaracTableUpdate));