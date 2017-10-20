import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Talent } from "../../components/personnage/Talent";
import Wolfgang from '../../data/Wolfgang.json';

export class TalentTable extends Component {
    render () {
        return (
            <Table condensed hover striped className="border">
                <thead>
                    <tr>
                        <th className="text-center">Talents</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Compétences</th>
                        <th className="text-center">Bonus</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Wolfgang.talents.map((talents, i) =>
                        <Talent key={i} {...talents}/>
                    )
                }
                </tbody>
            </Table>
        )
    }
}
