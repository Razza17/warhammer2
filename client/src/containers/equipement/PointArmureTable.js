import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PointArmure } from "../../components/equipement/PointArmure";
import { getCaracActuel } from "../../actions/CaracActuelAction";

class PointArmureTable extends Component {
    componentDidMount() {
        this.props.getCaracActuel();
    }

    ptsTete() {
        const tete = this.props.armure;
        let total = 0;

        for (let i = 0; i < tete.length; i++) {
            if (tete[i].couverture === "Tête") {
                total += tete[i].points;
            }

            if (i === tete.length - 1) {
                return Math.round(total);
            }
        }
    }

    ptsBras() {
       const bras = this.props.armure;
       let total = 0;

       for (let i = 0; i < bras.length; i++) {
           if (bras[i].couverture === "Bras") {
               total += bras[i].points;
           }

           if (i === bras.length - 1) {
               return Math.round(total);
           }
       }
   }

    ptsCorps() {
        const corps = this.props.armure;
        let total = 0;

        for (let i = 0; i < corps.length; i++) {
            if (corps[i].couverture === "Corps") {
                total += corps[i].points;
            }

            if (i === corps.length - 1) {
                return Math.round(total);
            }
        }
    }

    ptsTorse() {
        const torse = this.props.armure;
        let total = 0;

        for (let i = 0; i < torse.length; i++) {
            if (torse[i].couverture === "Corps + Bras") {
                total += torse[i].points;
            }

            if (i === torse.length - 1) {
                return Math.round(total);
            }
        }
    }

    ptsJambes(){
       const jambes = this.props.armure;
       let total = 0;

       for (let i = 0; i < jambes.length; i++) {
           if (jambes[i].couverture === "Jambes") {
               total += jambes[i].points;
           }

           if (i === jambes.length - 1) {
               return Math.round(total);
           }
       }
   }

    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="4">Points d'armure</th></tr>
                    <tr>
                        <th>Nom</th>
                        <th>Points (Amure + BE)</th>
                        <th>Valeur</th>
                    </tr>
                </thead>
                { this.props.caracActuel.map((caracActuel, i) => <PointArmure key={i} {...caracActuel}
                                                                                ptsTete={this.ptsTete()}
                                                                                ptsBras={this.ptsBras()}
                                                                                ptsCorps={this.ptsCorps()}
                                                                                ptsTorse={this.ptsTorse()}
                                                                                ptsJambes={this.ptsJambes()}/>)
                }
            </Table>
        )
    }
}

function mapStateToProps(state) {
    return {
        armure: state.armure.armure,
        caracActuel: state.caracActuel.caracActuel
    }
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({
        getCaracActuel:getCaracActuel
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchtoProps)(PointArmureTable);
