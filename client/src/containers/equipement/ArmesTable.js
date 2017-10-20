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
                    <tr>
                        <th className="text-center">Nom</th>
                        <th className="text-center">Enc</th>
                        <th className="text-center">Dégâts</th>
                        <th className="text-center">Portée</th>
                        <th className="text-center">Rechargement</th>
                        <th className="text-center">Attributs</th>
                    </tr>
                </thead>
                <tbody>
                    { Wolfgang.arme.map((armes, i) => <Armes key={i} {...armes} />) }
                </tbody>
            </Table>
        )
    }
}
