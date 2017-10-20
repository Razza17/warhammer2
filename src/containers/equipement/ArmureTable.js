import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Armure } from '../../components/equipement/Armure';

import Wolfgang from '../../data/Wolfgang.json';

export class ArmureTable extends Component {
    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="4" className="text-center">Armure</th></tr>
                    <tr>
                        <th className="text-center">Nom</th>
                        <th className="text-center">Enc</th>
                        <th className="text-center">Couverture</th>
                        <th className="text-center">Points</th>
                    </tr>
                </thead>
                <tbody>
                    { Wolfgang.armure.map((armure, i) => <Armure key={i} {...armure} />) }
                </tbody>
            </Table>
        )
    }
}
