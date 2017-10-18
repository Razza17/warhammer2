import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { PointArmure } from '../../components/equipement/PointArmure';

import Wolfgang from '../../data/Wolfgang.json';

export class PointArmureTable extends Component {

    ptsTete() {
        const tete = Wolfgang.armure;
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
       const bras = Wolfgang.armure;
       let total = 0;

       for (let i = 0; i < bras.length; i++) {
           if (bras[i].couverture == "Bras") {
               total += bras[i].points;
           }

           if (i == bras.length - 1) {
               return Math.round(total);
           }
       }
   }

    ptsCorps() {
        const corps = Wolfgang.armure;
        let total = 0;

        for (let i = 0; i < corps.length; i++) {
            if (corps[i].couverture == "Corps") {
                total += corps[i].points;
            }

            if (i == corps.length - 1) {
                return Math.round(total);
            }
        }
    }

    ptsTorse() {
        const torse = Wolfgang.armure;
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
       const jambes = Wolfgang.armure;
       let total = 0;

       for (let i = 0; i < jambes.length; i++) {
           if (jambes[i].couverture == "Jambes") {
               total += jambes[i].points;
           }

           if (i == jambes.length - 1) {
               return Math.round(total);
           }
       }
   }

    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="4" className="text-center">Points d'armure</th></tr>
                    <tr>
                        <th className="text-center">Nom</th>
                        <th className="text-center">Points</th>
                        <th className="text-center">Valeur</th>
                    </tr>
                </thead>
                {
                    Wolfgang.actuel.map((be, i) =>
                    <PointArmure
                        key={i} {...be}
                        ptsTete = {this.ptsTete()}
                        ptsBras = {this.ptsBras()}
                        ptsCorps = {this.ptsCorps()}
                        ptsTorse = {this.ptsTorse()}
                        ptsJambes = {this.ptsJambes()}
                    />)
                }
            </Table>
        )
    }
}
