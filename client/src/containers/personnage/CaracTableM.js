import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Wolfgang from "../../data/Wolfgang.json";
import {CaracBaseP} from "../../components/personnage/CaracBaseP";
import {CaracBaseS} from "../../components/personnage/CaracBaseS";
import {CaracAvanceP} from "../../components/personnage/CaracAvanceP";
import {CaracAvanceS} from "../../components/personnage/CaracAvanceS";
import {CaracActuelP} from "../../components/personnage/CaracActuelP";
import {CaracActuelS} from "../../components/personnage/CaracActuelS";


export class CaracTableM extends Component {
    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="9" className="text-center">Profil du Personnage</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan="8">Profil Principal</td>
                    </tr>
                    <tr className="text-center profilHeader">
                        <td>&nbsp;</td>
                        <td>CC</td>
                        <td>CT</td>
                        <td>F</td>
                        <td>E</td>
                        <td>Ag</td>
                        <td>Int</td>
                        <td>FM</td>
                        <td>Soc</td>
                    </tr>
                    {
                        Wolfgang.base.map((caracBase, i) =>
                            <CaracBaseP key={i} {...caracBase}/>
                        )
                    }
                    {
                        Wolfgang.avance.map((caracAvance, i) =>
                            <CaracAvanceP key={i} {...caracAvance}/>
                        )
                    }
                    {
                        Wolfgang.actuel.map((caracActuel, i) =>
                            <CaracActuelP key={i} {...caracActuel}/>
                        )
                    }
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan="8">Profil Secondaire</td>
                    </tr>
                    <tr className="text-center profilHeader">
                        <td>&nbsp;</td>
                        <td>A</td>
                        <td>B</td>
                        <td>BF</td>
                        <td>BE</td>
                        <td>M</td>
                        <td>Mag</td>
                        <td>PF</td>
                        <td>PD</td>
                    </tr>
                    {
                        Wolfgang.base.map((caracBase, i) =>
                            <CaracBaseS key={i} {...caracBase}/>
                        )
                    }
                    {
                        Wolfgang.avance.map((caracAvance, i) =>
                            <CaracAvanceS key={i} {...caracAvance}/>
                        )
                    }
                    {
                        Wolfgang.actuel.map((caracActuel, i) =>
                            <CaracActuelS key={i} {...caracActuel}/>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}
