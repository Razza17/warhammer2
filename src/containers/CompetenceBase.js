import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';

import { Competence } from "../components/Competence";
import Wolfgang from '../data/Wolfgang.json';

export class CompetenceBase extends Component {
    render() {
        return (
            <Col xs={12} md={6} lg={4}>
                <Table condensed hover className="border">
                    <thead>
                        <tr>
                            <th className="text-center">Compétences de base</th>
                            <th className="text-center">Carac.</th>
                            <th className="text-center">Acquis</th>
                            <th className="text-center">+10%</th>
                            <th className="text-center">+20%</th>
                            <th className="text-center">Bonus</th>
                            <th className="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Wolfgang.competenceB.map((competenceB, i) =>
                                <Competence key={i} {...competenceB}/>
                            )
                        }
                    </tbody>
                </Table>
            </Col>
        )
    }
}