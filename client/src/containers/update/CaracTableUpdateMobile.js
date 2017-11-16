import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCaracBase, updateCaracBase } from "../../actions/CaracBaseAction";
import { getCaracAvance, updateCaracAvance } from "../../actions/CaracAvanceAction";
import { getCaracActuel, updateCaracActuel } from "../../actions/CaracActuelAction";
import { CaracBaseUpdateMobile } from "../../components/update/CaracBaseUpdateMobile";
import { CaracAvanceUpdateMobile } from "../../components/update/CaracAvanceUpdateMobile";
import { CaracActuelUpdateMobile } from "../../components/update/CaracActuelUpdateMobile";
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
                {this.props.caracBase.map((caracBase, i) => <CaracBaseUpdateMobile key={i}
                                                                             getCaracBase={this.props.getCaracBase}
                                                                             updateCaracBase={this.props.updateCaracBase}
                                                                             {...caracBase}/>)
                }
                {this.props.caracAvance.map((caracAvance, i) => <CaracAvanceUpdateMobile key={i}
                                                                                   getCaracAvance={this.props.getCaracAvance}
                                                                                   updateCaracAvance={this.props.updateCaracAvance}
                                                                                   {...caracAvance}/>)
                }
                {this.props.caracActuel.map((caracActuel, i) => <CaracActuelUpdateMobile key={i}
                                                                                   getCaracActuel={this.props.getCaracActuel}
                                                                                   updateCaracActuel={this.props.updateCaracActuel}
                                                                                   {...caracActuel}/>)
                }
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