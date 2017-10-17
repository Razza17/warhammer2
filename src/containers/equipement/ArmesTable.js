import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Armes } from '../../components/equipement/Armes';

import Wolfgang from '../../data/Wolfgang.json';

export class ArmesTable extends Component {
    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="7" className="text-center">Armes</th></tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>Nom</td>
                        <td>Enc</td>
                        <td>Dégâts</td>
                        <td>Portée</td>
                        <td>Rechargement</td>
                        <td>Attributs</td>
                    </tr>
                    { Wolfgang.arme.map((armes, i) => <Armes key={i} {...armes} />) }
                </tbody>
            </Table>
        )
    }
}
